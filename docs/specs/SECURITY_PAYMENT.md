# Authentication and external gift rules

The October MVP handles **gift directions**, not gift money. Cash App, Venmo or Zelle handle transfers outside TheDigitalCardBox. A host supplied handle, email or phone can still be personal information and must be protected. Neither a disclaimer nor a private repository makes a wrong destination harmless.

## Authentication and authorization

- Use a managed identity provider with verified host email; prefer passkeys or MFA where available. Do not create a password database.
- Store host session secrets server-side or in secure, HttpOnly, SameSite cookies. Use strict Origin or CSRF checks on cookie-authenticated mutations.
- Derive the actor, role and owned event from the verified session and database; never accept browser-supplied owner IDs or roles as authority.
- Require recent authentication for publishing, editing or disabling a gift destination and for a private export. Alert the host on destination changes. Operators have separate accounts and MFA.
- Guests may access only the event-scoped, time-bounded actions visible for that event. Links do not grant host access. Check authorization again for files, exports, jobs and writes.

## Destination setup

- Allowlist the three MVP service names and validate a structured identifier for each. Do not accept arbitrary outbound URLs.
- Require double-entry, an exact recipient display, host review in the actual payment service and explicit confirmation. Version each active route and retain an audit trail.
- Any edit pauses only that service; an old destination version cannot be used for a new handoff. A disabled service disappears immediately.
- A guest chooses one route and sees the full host-supplied identifier and service. The acknowledgment resets on a route switch or version change. The guest must confirm the recipient again **inside the external service** before sending.
- TheDigitalCardBox cannot independently verify ownership of a host supplied external account or the success, reversal or recovery of an external transfer. Host confirmation is labeled as such; never display “paid” based on a redirect or a guest click.
- Have counsel review terms and adjacent on-screen copy before opening a public pilot. Language may describe responsibility but must not promise immunity for a bug in this app.

## Data and operations

Keep AI keys and any vendor secret on the server, never in `VITE_*` or client bundles. Do not collect card numbers, bank details, wallet credentials, payment passwords or screenshots as proof. Encrypt stored destination identifiers, restrict reads, redact logs, use least privilege, rate limits, media caps, malware scanning or safe media handling, backups and a restore drill. Record minimal audit events for destination edits and exports. Test cross-event reads, expired sessions, deadline boundaries, stale route versions, service switching and failure states before live users.

An integrated checkout is a separate phase requiring written provider approval of custody, underwriting, payout, fees, disputes and liability. Only then use provider-hosted data collection, signed webhooks, idempotent ledger transitions and reconciliation. A browser return still does not verify payment.

## Deployment credentials

DEV, TEST and PROD use distinct Cloudflare account-owned API tokens restricted to their existing individual Worker with the Editor role, held as GitHub environment secrets. Keep the account ID as a non-secret environment variable. The current static UI needs no whole-account, domain-route, Pages, KV, R2, Containers or Workers CI policy. Do not use a broad template token as if it were project-isolated. Never expose deployment credentials in browser bundles, source files, command arguments or logs. Existing Cloudflare Git-connected builds must be disconnected before the GitHub production approval is treated as the sole automatic production path. New Workers, custom domains and future storage bindings require separately reviewed scopes under ADR 0006.
