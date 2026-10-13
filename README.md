# DigitalCardBox development starter

DigitalCardBox is a digital card, memory and external cash gift experience for events and everyday occasions. The **private MVP target is October 31, 2026**. This repository includes a running React UI starter, the clickable HTML concept, the current Word reference documents, the October backlog and implementation guardrails.

## Start locally

1. Install [Node.js](https://nodejs.org/en/download) 22 or newer, [Git](https://git-scm.com/downloads) and [Visual Studio Code](https://code.visualstudio.com/Download) or use Visual Studio with its integrated terminal.
2. Unzip the starter and open the **digitalcardbox-app** folder: `code digitalcardbox-app` or **File → Open Folder**.
3. In that folder's terminal run `npm install`, then `npm run dev`.
4. Open the local URL Vite prints, normally `http://127.0.0.1:5173/`. The longer clickable concept is at `http://127.0.0.1:5173/prototype/index.html`.
5. Run `npm run build` to typecheck and build, and `npm run check:planning` to check the backlog.

The starter uses local sample data. It does **not** create real host accounts, save cards, call AI, or send money. Do not expose real wallet destinations in the demo. Follow the October stories before claiming an MVP release.

## Choose the production backend early

The React and Vite starter gets development moving in the stack the developer knows. [ADR 0001](docs/adr/0001-production-stack.md) records the still open choice between a Next.js server app and React with Cloudflare Functions. Decide by **October 14**. Both approaches stay in one repository with the same domain contracts. AI keys, host sessions, destination validation, storage and event-window rules must run on the server.

## Repository map

| Path | Purpose |
| --- | --- |
| `src/` | TypeScript React UI and typed demo contracts |
| `public/prototype/index.html` | Complete clickable design draft, including guest and host views |
| `docs/reference/` | Six maintained Word planning documents |
| `docs/specs/` | Canonical October scope, release gates and money rules |
| `docs/adr/` | Architecture decisions and an open stack decision |
| `planning/` | Dated 18 epic / 104 story backlog, database audit and GitHub importer |
| `.github/` and `AGENTS.md` | Copilot instructions and review prompts |

The specifications describe the October release. Reference Word files also discuss later business scenarios and integrations; their prices are assumptions pending quotes. If they diverge, update both after a decision.

## GitHub

The production database design is [DATA_MODEL.md](docs/specs/DATA_MODEL.md): one managed PostgreSQL database per environment, event-scoped guest records and separate external gift activity, with private photo/export storage. [ADR 0005](docs/adr/0005-database-design.md) records the decision and [the backlog audit](planning/DATABASE_BACKLOG_AUDIT.md) maps its implementation. Provider/runtime installation remains pending; the demo has no database. The October estimate is now 180 hours across 54 stories, including 24 explicit foundation hours; October 31 requires capacity review.

Use the separate [GitHub setup guide](planning/GITHUB_SETUP.md). Create one **private** repository, import issues and sub-issues, then create a GitHub Projects Board and import those issues. The importer does not run unless you pass `--apply`.

For a disposable public **sample UI** URL, follow [the static preview guide](planning/DEPLOY_DISPOSABLE_POC.md).
