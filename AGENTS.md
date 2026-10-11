# Cardsake agent instructions

Read `docs/specs/PRODUCT.md`, `SECURITY_PAYMENT.md`, `MVP_ACCEPTANCE.md` and the current GitHub issue before editing production behavior. Read ADR 0001 before choosing a production server runtime. The React starter and `public/prototype/index.html` contain **sample-only** data; do not treat their mock logic as server validation.

Keep domain modules orthogonal. Events owns time windows, Gifts owns destination versions and gift intent wording, Cards owns content and consent, AI owns bounded suggestions. Modules use public contracts, not another module's internal database objects.

Money boundary: never collect credentials or financial account numbers, never assert an external gift is paid because a URL was opened, and never allow an arbitrary host-provided redirect. A host supplied payment identifier is sensitive personal data. Test authorization, time windows, selected route version, switches and false confirmation claims before merging.

When an implementation decision changes, update the spec, ADR, affected Word reference document and issue. Prefer small reviewable PRs with a build and meaningful edge-case tests. Do not introduce a second repository or integrated payment processing without an explicit architecture decision.
