# DigitalCardBox agent instructions

## Start with the requirements

Before changing production behavior, read `docs/specs/PRODUCT.md`, `SECURITY_PAYMENT.md`, and `MVP_ACCEPTANCE.md`.

For work tied to a GitHub story, read the full story, its acceptance criteria, parent epic, relevant comments, and linked blockers before editing. Start with the issue number or URL provided in the task. If none is provided, search existing issues for a match and flag any ambiguity. Read related stories when planning a feature, but do not load the entire board for a single implementation task. If GitHub access is unavailable, say which issue details could not be checked.

Read ADR 0001 before choosing a production server runtime. The React starter and `public/prototype/index.html` contain **sample-only** data; their mock logic is not server validation.

## Preserve module boundaries

Keep domain modules orthogonal. Events owns event time windows. Gifts owns destination versions and gift intent wording. Cards owns content and consent. AI owns bounded suggestions. Modules communicate through public contracts, not another module’s internal database objects.

## Protect users and payment information

Never collect payment credentials or financial account numbers. Treat a host-supplied payment identifier as sensitive personal data. Never claim an external gift was paid because a guest opened a payment URL, and never allow an arbitrary host-provided redirect.

Before merging payment or event changes, test authorization, event time windows, the selected payment route and destination version, feature switches, and wording that could falsely imply payment confirmation.

## Keep implementation and plans in sync

Use the assigned story’s acceptance criteria to define the task. If a story conflicts with a spec or ADR, surface the conflict before implementing an assumption.

When an implementation decision changes, update the relevant spec, ADR, affected Word reference document, and GitHub issue. The backlog import script does not update existing GitHub issues; edit those issues directly.

Prefer small, reviewable PRs. Run the build and meaningful edge-case tests for changed behavior. Do not introduce a second repository or integrated payment processing without an explicit architecture decision.
