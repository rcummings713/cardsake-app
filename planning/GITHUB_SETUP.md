# Create TheDigitalCardBox repository and board

These commands run **on your Mac** in the unzipped `digitalcardbox-app` folder. They create a private GitHub repository and issue backlog only when you execute them; this download is not linked to an account.

## Install and run locally

1. Install [Node.js](https://nodejs.org/en/download) 22+, [Git](https://git-scm.com/downloads), [GitHub CLI](https://cli.github.com/) and [Visual Studio Code](https://code.visualstudio.com/Download).
2. Unzip `DigitalCardBox_Development_Starter.zip`, open the `digitalcardbox-app` folder in VS Code or Visual Studio, and run:

```bash
npm install
npm run dev
```

Open the printed local URL. The detailed clickable draft is at `/prototype/index.html`. Run `npm run build` before your first commit.

## Create one private repo

In that same folder:

```bash
git init
git add .
git commit -m "Start TheDigitalCardBox MVP"
gh auth login
gh repo create digitalcardbox-app --private --source=. --remote=origin --push
```

If you prefer the GitHub website, create a **private empty** repo named `digitalcardbox-app`, then copy its displayed commands for pushing an existing local repo. Keep `.env` and secrets out of commits.

## Import epics and stories

Find your GitHub owner name with `gh api user --jq .login`. Substitute it for `YOURNAME`:

```bash
python3 planning/import_github_issues.py --repo YOURNAME/digitalcardbox-app
python3 planning/import_github_issues.py --repo YOURNAME/digitalcardbox-app --only-october --apply
python3 planning/import_github_issues.py --repo YOURNAME/digitalcardbox-app --apply
```

The first command is a dry run. The second creates October parent epics and dated sub-issues; the third adds the complete future backlog and skips existing markers. The script creates labels and the **October 2026 private MVP** milestone due October 31 Eastern. It does not store credentials. If the command stops, resolve the GitHub error and rerun; it skips successfully created items. Requires a current GitHub CLI supporting `gh issue create --parent`.

## Create the board

1. On GitHub, click your avatar → **Your projects** → **New project** → **Board**. Name it **TheDigitalCardBox Development**.
2. Choose **Import items from repository** and select `digitalcardbox-app`. If you already made an empty board, use **Add item from repository** to bring issues in.
3. Use **Todo**, **In Progress**, **In Review** and **Done** as Status columns. Add a separate Roadmap or Table view if you want to inspect dates and estimates.
4. Save a view named **October MVP** filtered to `label:release:october`; save **Later backlog** filtered to `label:release:post-mvp`. Week labels `week:oct12`, `week:oct19` and `week:oct26` show the three delivery blocks.
5. Enable the project's built-in workflow to set Done when an issue closes. Optionally set auto-add for new repository issues.
6. Assign yourself October issues; link PRs with `Closes #123`. Keep epic parent issues open until all child acceptance checks pass.

Do not interpret a scheduled issue as permission to publish a payment flow. Use the release gates in `docs/specs/MVP_ACCEPTANCE.md`.

Official help: [GitHub CLI repository creation](https://cli.github.com/manual/gh_repo_create), [issue creation](https://cli.github.com/manual/gh_issue_create), [Projects Board](https://docs.github.com/en/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project), [project auto-add](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically).
