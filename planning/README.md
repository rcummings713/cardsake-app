# Planning files

- `MVP_RELEASE_PLAN.md`: three dated October blocks and critical path.
- `DEPLOY_DISPOSABLE_POC.md`: free static sample preview with a temporary `pages.dev` URL.
- `GITHUB_SETUP.md`: local, repository, issue and Projects Board steps.
- `backlog.md`: generated readable 19-epic, 110-story backlog.
- `backlog.json`: canonical importer source, including 54 October dates and 180 estimated hours.
- `DATABASE_BACKLOG_AUDIT.md`: database review, live GitHub mapping, dependencies and redundancy decisions.
- `render_backlog.py`: regenerates the readable backlog; `--check` verifies synchronization.
- `import_github_issues.py`: dry run by default; `--apply` creates issues.
- `check_backlog.py`: validates identifiers, scope, hour totals, dependency graph and readable backlog synchronization.

Run `python3 planning/render_backlog.py` after editing the JSON, then `npm run check:planning`. The importer creates missing marked issues but does not update existing bodies or apply native blocking relationships. Update existing GitHub issues directly and keep database blocker links synchronized; the audit records this change's issue mapping.

The backlog is a plan, not an assertion that features are implemented. Review acceptance criteria with the founder and reestimate as actual code and tests reveal work.

UI-first review scope and decisions: [UI_REVIEW.md](UI_REVIEW.md). UI review stories have no new October date/hour commitment; backend acceptance gates and the 180-hour baseline remain unchanged. The owner closes all issues.
