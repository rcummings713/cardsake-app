# TheDigitalCardBox

The customer application UI in `feature/mvp_iteration_1`, using the existing brand,
original illustrated cards and fictional browser-local records for design review.
No sign-in is required. No backend, live payments or account provider is connected.

Use Node 22, then `npm ci` and `npm run dev`. Start at `/`, or open `/workspace`.
The host share page opens its event-scoped guest journey and a downloadable QR.
Preferences links to `/admin` and provides workspace reset. Custom event links
work in the same browser until connected storage exists. Never use real private
event or payment information in this account-free build.

Checks: `npm run build`, `npm run check:planning`, `npm run test:ui` and
`node --test scripts/deployment-plan.test.mjs`. Playwright uses installed Chrome
on macOS and its Chromium browser on CI (`npx playwright install chromium`).

Read [the page map](docs/specs/UI_DESIGN.md), [review guide](planning/UI_REVIEW.md)
and [backend release gates](docs/specs/MVP_ACCEPTANCE.md). UI progress does not
complete those gates. Existing issue IDs and domain stories are preserved;
issues stay open for the owner to close.

The repository/package/Worker identifiers remain `digitalcardbox-app`. DEV/TEST
only for this review; PROD requires a separate owner-approved release under
[ADR 0006](docs/adr/0006-deployment-environments.md).
