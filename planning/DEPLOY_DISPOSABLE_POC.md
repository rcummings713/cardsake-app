# Put the sample UI on a disposable URL

The local starter and `/prototype/index.html` are **sample-only**. They do not authenticate hosts, save content, verify payment destinations or send money. Publish this as a design preview with fictitious details only. Do not use it for a real event.

The existing Cloudflare Workers demo is named `digitalcardbox-app` and uses `https://digitalcardbox-app.rcummings71300.workers.dev`. Its GitHub connection points to `rcummings713/digitalcardbox-app`. Build with `npm run build`; the checked-in `wrangler.jsonc` serves `dist/` as static assets. Cloudflare's production deploy command is `npx wrangler deploy`; its branch-preview command is `npx wrangler preview`, which requires the included `previews` block. This sample hosting configuration does not decide the production backend in ADR 0001.

To create a separate disposable Pages preview through the dashboard:

1. From `digitalcardbox-app`, run `npm install` and `npm run build`.
2. Create a free Cloudflare account. In **Workers & Pages**, choose **Create application → Pages → Direct Upload**. Give the preview a unique name such as `digitalcardbox-concept-2026`.
3. Upload the **contents of `dist/`** (or choose the `dist` folder when prompted) and deploy. Cloudflare provides `<project-name>.pages.dev`; the clickable design draft is at `/prototype/index.html` under that URL.
4. Share the preview only as a UI concept. After feedback, delete the project in Cloudflare to retire the disposable address. Removing a preview address does not erase copies or screenshots someone already made.

Use a **separate** Pages project or deployment configuration for the real app after ADR 0001 is decided. Real authentication, API secrets, event windows, private files and gift route checks belong on the backend. Direct Upload from the dashboard is suitable for this static demonstration; Cloudflare documents different deployment requirements for Pages Functions.

Sources: [Cloudflare Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/), [Pages limits](https://developers.cloudflare.com/pages/platform/limits/), [Pages Functions setup](https://developers.cloudflare.com/pages/functions/get-started/), [Workers preview configuration](https://developers.cloudflare.com/workers/previews/configuration/).
