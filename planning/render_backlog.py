#!/usr/bin/env python3
"""Render backlog.md from backlog.json; --check verifies synchronization."""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def render(data):
    stories = [s for e in data['epics'] for s in e['stories']]
    october = sorted((s for s in stories if s['target_date']),
                     key=lambda s: (s['target_date'], s['id']))
    lines = [
        '# TheDigitalCardBox development backlog', '',
        f"**October private MVP target:** 31 October 2026 · {data['october_target_hours']} focused developer hours across {len(october)} stories.",
        '**Status:** AI-drafted estimates; release depends on acceptance gates and capacity, not date alone.',
        '**Source:** Generated from `backlog.json` by `python3 planning/render_backlog.py`.', '',
        'Database coverage and scope exclusions: [DATABASE_BACKLOG_AUDIT.md](DATABASE_BACKLOG_AUDIT.md).', '',
        '## October schedule', '', '| Due | Issue | Story | Hours |', '| --- | --- | --- | ---: |'
    ]
    lines += [f"| {s['target_date']} | {s['id']} | {s['title']} | {s['estimate_hours']} |" for s in october]
    lines += ['', '## All epics and stories', '']
    for e in data['epics']:
        lines += [f"### {e['id']} {e['title']}", '', f"Release: {e['release']}. {e['outcome']}", '']
        for s in e['stories']:
            lines += [f"- **{s['id']} {s['title']}** — {s['release']}. {s['story']}"]
            lines += ['  - ' + a for a in s['acceptance']]
            if s.get('depends_on'):
                lines += ['  - **Blocked by:** ' + ', '.join(s['depends_on'])]
        lines += ['']
    return '\n'.join(lines)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    expected = render(json.loads((ROOT / 'backlog.json').read_text()))
    target = ROOT / 'backlog.md'
    if args.check:
        if target.read_text() != expected:
            raise SystemExit('backlog.md is stale; run python3 planning/render_backlog.py')
        print('Readable backlog matches backlog.json.')
    else:
        target.write_text(expected)


if __name__ == '__main__':
    main()
