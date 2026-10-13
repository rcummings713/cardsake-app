# Deployment environments and solo release workflow

The setup follows [ADR 0006](../docs/adr/0006-deployment-environments.md). The application is currently a static, sample-only UI.

| Environment | Source | URL |
| --- | --- | --- |
| DEV | Each `feature/` branch | Its own preview under the DEV Worker; `digitalcardbox-app-dev.rcummings71300.workers.dev` is the initial DEV baseline. |
| TEST | `develop` | `https://digitalcardbox-app-test.rcummings71300.workers.dev` |
| TEST candidate | Each `release/` branch | Its own preview under the TEST Worker. |
| PROD | Approved `master` build | `https://digitalcardbox-app.rcummings71300.workers.dev` |

Preview links and the exact deployed SHA appear in the Actions run and GitHub environment deployment. Preview names include a short hash of the full branch name. These addresses are disposable; no purchased domain is required.

`master` starts from the current production history with pipeline files only, and is the default branch. The new `develop` branch starts from that same source. The previous `main` is retained as a frozen legacy reference until the Cloudflare Git-connected builds are disconnected; no feature UI is promoted during setup.

## One-time Cloudflare setup

The existing local Wrangler session can deploy Workers, but Cloudflare returned HTTP 403 for API-token management and Workers Builds management. The account owner must complete these settings:

1. Create a Cloudflare API token using the **Edit Cloudflare Workers** template, restricted to this account. Store it directly as `CLOUDFLARE_API_TOKEN` in each GitHub environment, DEV, TEST and PROD. Tokens can be distinct; keep their values out of chat, source files and command arguments.
2. Disable the existing Worker's Git-connected automatic builds in Cloudflare. Keep `digitalcardbox-app` and its existing URL running. GitHub Actions must be the only automatic production deployment path.

Each GitHub environment already has the public `CLOUDFLARE_ACCOUNT_ID` variable. The CI workflow checks for credentials and stops with a clear error if they are missing. The Cloudflare OAuth token used on this Mac is never copied into GitHub Secrets.

## Daily work

1. Start a `feature/<name>` branch from `develop`, commit and push. Actions builds it and publishes its independent DEV preview.
2. Merge your feature PR into `develop` after checks pass. The stable TEST site updates automatically.
3. Create `release/<version>` from `develop`. Push candidate fixes and review its TEST preview. A release branch never publishes PROD directly.
4. Open a release PR into `master`. You can merge your own PR once the required Build check passes; no approval from another person is required.
5. In Actions, use **Review deployments** to approve your own PROD deployment. Self-review is enabled. If master moved while the run was waiting, approve the newer run instead.
6. Merge release fixes back into `develop` so they are retained for the next feature.

Use Actions **Re-run jobs** after adding missing credentials or resolving a transient deployment failure. A manual workflow run uses the selected branch's route; choosing a release branch still deploys TEST.

## Validation and recovery

Run `node --test scripts/deployment-plan.test.mjs`, `npm run build`, and `npm run check:planning` before merging. The pipeline pins its actions and Wrangler version, deploys the checked build artifact, and serializes deployment updates. Branch-routing tests cover unsupported refs, tags, PR events, nested names, shell-sensitive characters, and preview-name collisions.

For an application rollback, revert the problematic production change on master through a PR, let Build pass, and approve the rollback deployment. Keep the deployed SHA/version in the incident note. Domain and database release checks remain required when those implementations are introduced.
