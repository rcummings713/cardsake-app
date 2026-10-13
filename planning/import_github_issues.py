#!/usr/bin/env python3
"""Preview or import TheDigitalCardBox epics and sub-issues into an existing GitHub repo.

Requires GitHub CLI, authentication, and an existing repository. Dry run is
the default. Stable HTML markers make repeated --apply runs idempotent.
"""
import argparse
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
REPO = re.compile(r"^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$")
MARKER = re.compile(r"<!-- digitalcardbox-backlog: ([A-Z0-9-]+) -->")
MILESTONE = "October 2026 private MVP"

def gh(*args, input_text=None):
    p = subprocess.run(["gh", *args], input=input_text, text=True, capture_output=True)
    if p.returncode:
        raise RuntimeError(f"gh {args[0]} failed: {p.stderr.strip() or p.stdout.strip()}")
    return p.stdout.strip()

def existing(repo):
    data = json.loads(gh("issue", "list", "--repo", repo, "--state", "all",
                         "--limit", "1000", "--json", "number,body"))
    found = {}
    for issue in data:
        match = MARKER.search(issue.get("body") or "")
        if match:
            if match.group(1) in found:
                raise RuntimeError(f"Duplicate backlog marker: {match.group(1)}")
            found[match.group(1)] = issue["number"]
    return found

def labels(repo):
    colors = {
        "type:epic": "6F42C1", "type:story": "0E8A16",
        "phase:poc": "1D76DB", "phase:mvp": "B60205", "phase:later": "D4C5F9",
        "release:october": "B60205", "release:post-mvp": "C2E0C6",
        "week:oct12": "C5DEF5", "week:oct19": "BFDADC", "week:oct26": "F9D0C4",
        "priority:p0": "B60205", "priority:p1": "FBCA04", "priority:p2": "C2E0C6",
    }
    for label, color in colors.items():
        gh("label", "create", label, "--repo", repo, "--color", color, "--force")

def ensure_milestone(repo):
    milestones = json.loads(gh("api", f"repos/{repo}/milestones", "--paginate"))
    if any(x["title"] == MILESTONE for x in milestones):
        return
    gh("api", "-X", "POST", f"repos/{repo}/milestones",
       "-f", f"title={MILESTONE}",
       "-f", "due_on=2026-11-01T03:59:00Z",
       "-f", "description=Private MVP target: October 31 in America/New_York. Do not bypass release gates.")

def body(item, epic=None):
    parts = [f'<!-- digitalcardbox-backlog: {item["id"]} -->', ""]
    if epic:
        parts += ["## User story", item["story"], "", "## Acceptance criteria"]
        parts += ["- " + x for x in item["acceptance"]]
        parts += ["", f'**Parent epic:** {epic["id"]} {epic["title"]}']
        if item["target_date"]:
            parts += [f'**Target:** {item["target_date"]} America/New_York',
                      f'**Estimate:** {item["estimate_hours"]} focused developer hours']
        else:
            parts += ["**Target:** Post-MVP; no date committed"]
        parts += ["**Release:** " + item["release"], "**Priority:** " + item["priority"]]
    else:
        parts += ["## Outcome", item["outcome"], "", "**Release:** " + item["release"],
                  "Complete the child stories and verify the release gates in docs/specs/MVP_ACCEPTANCE.md."]
    return "\n".join(parts)

def create(repo, title, description, tags, parent=None, october=False):
    args = ["issue", "create", "--repo", repo, "--title", title,
            "--body-file", "-"]
    for tag in tags:
        args += ["--label", tag]
    if parent is not None:
        args += ["--parent", str(parent)]
    if october:
        args += ["--milestone", MILESTONE]
    url = gh(*args, input_text=description)
    match = re.search(r"/issues/(\d+)\s*$", url)
    if not match:
        raise RuntimeError(f"Could not read issue number from {url!r}")
    return int(match.group(1)), url

def week(date):
    day = int(date[-2:])
    return "week:oct12" if day <= 18 else "week:oct19" if day <= 25 else "week:oct26"

def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--repo", required=True, help="OWNER/digitalcardbox-app")
    p.add_argument("--apply", action="store_true", help="Create issues; default is dry run")
    p.add_argument("--only-october", action="store_true", help="Import only October work first")
    args = p.parse_args()
    if not REPO.fullmatch(args.repo):
        p.error("--repo must be OWNER/REPO")
    data = json.loads((ROOT / "backlog.json").read_text())
    epics = [e for e in data["epics"] if not args.only_october or
             any(s["target_date"] for s in e["stories"])]
    count = sum(len([s for s in e["stories"] if not args.only_october or s["target_date"]])
                for e in epics)
    print(f'TheDigitalCardBox: {len(epics)} epics, {count} stories for {args.repo}')
    if not args.apply:
        print("Dry run only. Create and authenticate the private repo, then add --apply.")
        for e in epics:
            print(f'  {e["id"]} {e["title"]}')
        return
    if not shutil.which("gh"):
        raise RuntimeError("Install GitHub CLI from https://cli.github.com/")
    gh("auth", "status")
    found = existing(args.repo)
    labels(args.repo)
    ensure_milestone(args.repo)
    for e in epics:
        stories = [s for s in e["stories"] if not args.only_october or s["target_date"]]
        is_oct = any(s["target_date"] for s in stories)
        if e["id"] in found:
            parent = found[e["id"]]
            print("Skip epic", e["id"], parent)
        else:
            tags = ["type:epic", f'phase:{e["phase"].lower()}',
                    "release:october" if is_oct else "release:post-mvp"]
            parent, url = create(args.repo, "[Epic] " + e["title"], body(e), tags,
                                 october=is_oct)
            found[e["id"]] = parent
            print("Created", e["id"], url)
        for s in stories:
            if s["id"] in found:
                print("  Skip", s["id"], found[s["id"]])
                continue
            is_oct = bool(s["target_date"])
            tags = ["type:story", f'phase:{e["phase"].lower()}',
                    f'priority:{s["priority"].lower()}',
                    "release:october" if is_oct else "release:post-mvp"]
            if is_oct:
                tags += [week(s["target_date"])]
            number, url = create(args.repo, f'[{s["id"]}] {s["title"]}',
                                 body(s, e), tags, parent=parent, october=is_oct)
            found[s["id"]] = number
            print("  Created", s["id"], url)
    print("Done. Import repository issues into a GitHub Projects Board.")

if __name__ == "__main__":
    try:
        main()
    except RuntimeError as error:
        print("Import stopped:", error, file=sys.stderr)
        sys.exit(1)
