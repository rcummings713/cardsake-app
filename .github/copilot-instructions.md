# DigitalCardBox Copilot repository instructions

This is a TypeScript React starter and a **private MVP in progress**, not a payment service. Read `AGENTS.md`, `docs/specs/PRODUCT.md`, `docs/specs/SECURITY_PAYMENT.md`, `docs/specs/MVP_ACCEPTANCE.md`, and the relevant ADR before proposing code. Use the issue's acceptance criteria. Avoid inventing requirements or marking future backlog stories as implemented.

- Keep UI, application use cases, domain policies and vendor adapters separate. The production stack is open until ADR 0001 is decided.
- Browser code is untrusted. Put host auth, ownership, deadline policy, rate limits, AI keys, gift route lookup, route versions and private exports on the server. Never prefix a secret with `VITE_`.
- External Cash App, Venmo and Zelle gift routes are host supplied and **unverified by DigitalCardBox**. Show exact selected account, reset acknowledgment on method/version change, reject stale routes and never infer payment from a click.
- Manual note/card flow must survive AI timeout or refusal. AI choices are suggestions that guests can edit and explicitly submit. Restrict personal data sent to vendors.
- Avoid modifying Word documents as binary blobs without updating their source decisions; preserve diagrams in the system design file.
- Before merging, run `npm run build`, `npm run check:planning` and focused tests for affected behavior. Human review is required for auth, destination routing and legal copy.
