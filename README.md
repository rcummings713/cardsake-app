# DigitalCardBox development starter

DigitalCardBox is a digital card, memory and external cash gift experience for events and everyday occasions. The **private MVP target is October 31, 2026**. This repository includes a running React UI starter, the clickable HTML concept, the current Word reference documents, the October backlog and implementation guardrails.

## Start locally

1. Install [Node.js](https://nodejs.org/en/download) 22 or newer, [Git](https://git-scm.com/downloads) and [Visual Studio Code](https://code.visualstudio.com/Download) or use Visual Studio with its integrated terminal.
2. Unzip the starter and open the **digitalcardbox-app** folder: `code digitalcardbox-app` or **File → Open Folder**.
3. In that folder's terminal run `npm install`, then `npm run dev`.
4. Open the local URL Vite prints, normally `http://127.0.0.1:5173/`. The longer clickable concept is at `http://127.0.0.1:5173/prototype/index.html`.
5. Run `npm run build` to typecheck and build, and `npm run check:planning` to check the backlog.

The starter uses local sample data. It does **not** create real host accounts, save cards, call AI, or send money. Do not expose real wallet destinations in the demo. Follow the October stories before claiming an MVP release.

## UI reference and pages

The sample UI follows the supplied Margot reference: blush colors, white editorial panels, photographic cards, and Forum/Montserrat/Hanken Grotesk typography. The supplied company logo appears in every shared header and compact footer, including the full demo; its envelope-and-box symbol also appears in the browser tab. The commercial Miss Noteworthy font for decorative script accents requires a licensed webfont; La Belle Aurore is the temporary fallback. Add the licensed declaration to `public/brand-font.css` when available. See [the UI specification](docs/specs/UI_DESIGN.md) for the exact palette and asset sources.

Home, Guest, Host, About, and Contact are available at `/`, `/guest`, `/host`, `/about`, and `/contact`. The full styled concept remains at `/prototype/index.html`; `/prototype/index.html#setup` opens host setup. The existing Cloudflare SPA configuration supports direct page entry and refresh.

Contact lists `support@digitalcardbox.com` for support and `info@digitalcardbox.com` for general information. The form routes support and guest-experience drafts to Support; general, hosting, and feedback drafts go to General Info. Visitors can copy the draft or open it in their own email app. No contact backend is included, and preparing a draft does not send it.

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

## Deployment environments

See [the environment runbook](planning/ENVIRONMENTS.md) and [ADR 0006](docs/adr/0006-deployment-environments.md) for DEV feature previews, TEST develop/release deployments, and owner-approved PROD deployments from master. Self-review is enabled; no second contributor is required.
