# ADR 0007 UI-first customer experience and local review state

**Status:** Accepted for design review. **Date:** 13 October 2026.

The owner requested the complete intended application UI before backend work,
using the current branch style, fictional data and no required sign-in. Remove
the public sample-site presentation, preserve TheDigitalCardBox branding and
keep this work in the current feature branch and non-production environments.

Use React page modules with a small browser adapter for navigation and fictional
state. Keep event, card, gift and feature-flag shapes explicit so backend public
contracts can replace this adapter without representing local state as server
authority. The host workspace and in-app administrator console share the
existing component/theme system; an external admin product is unnecessary for
review and would add authentication/setup before the requested work is possible.
Revisit the production administration tool when role/audit/backend needs exist.

Guest events have opaque invitation routes and no public navigation or search.
The host can preview and rotate local invitation links. No-login host/admin
access is a deliberate development affordance using fictional records, not an
authorization mechanism. Do not expose real events on this implementation.
Server ownership, role checks, link hashing/revocation, files, exports and all
mutations remain required under ADR 0005 and SECURITY_PAYMENT.md.

Use original vector card artwork and locally generated animated stickers. Do not
connect provider sign-in, transaction feeds, AI, third-party GIF catalogs or
checkout just to make a design review clickable. Display honest local-action
results. Track integration discovery and server enforcement as separate stories.

Use known guest name, payment alias, optional intended amount and an opaque
reference to support manual gift matching. No transfer is inferred or verified.
Provider transaction access is a feasibility question, not a UI assumption.

Keep the existing October estimate at 180 hours; the added UI design review is
unscheduled separately and does not promise an October release or waive any
production gate. All worked stories stay open/In Progress for the owner's review.
See UI_DESIGN.md and planning/UI_REVIEW.md for scope, decisions and issue links.
