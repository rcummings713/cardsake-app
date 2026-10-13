# ADR 0005 Managed PostgreSQL and module-owned relational data

**Status:** Accepted for database design; provider/provisioning await the stack spike. **Date:** 13 October 2026.

## Context

The Word system-design reference already proposes PostgreSQL and a brief table list. DATA_MODEL.md previously named only module records. The imported backlog lacks explicit database provisioning, migrations and schema installation deliverables; existing stories own sign-in, guest sessions, cards, gifts, export, encryption and backups. UI data remains sample-only and ADR 0001 leaves the server framework open.

Customer/guest identities, destination versions, consent and gift history need relational integrity. Concurrent handoff/route edits and window locking need atomic transactions. Later optional product checkout and approved gift processing need separate purchase records and a reconciled ledger. Media belongs in private object storage.

## Decision

Use one managed PostgreSQL database per environment, module schemas and one coordinated migration history in this repository. [DATA_MODEL.md](../specs/DATA_MODEL.md) is the canonical contract. Evaluate Supabase first because the financial reference already budgets it; select provider, version, auth integration, backup capability and adapter from the ADR 0001 spike. This documentation change does not buy/provision a service.

Keep one customer identity and event-scoped guests independent of expiring sessions. Unify notes/cards as submissions. External intent/activity is not a verified financial transaction. Future Billing owns product orders/payments/entitlements; future integrated Gifts owns an independently approved funds ledger. No catch-all transactions or duplicate CardVault content.

Use application authorization, scoped FKs, least-privilege roles and tested database access policies. Encrypt sensitive fields with external keys. Public module repositories share a composition-layer unit of work; modules cannot read private tables across boundaries. Commit outbox work with mutations and deduplicate consumers. No extra repository, per-module databases, queue service or warehouse is required for the private MVP.

## Alternatives

- **Managed PostgreSQL:** preferred for relational constraints, flexible transactions, row locking and the existing reference design; compatible with conventional servers or a tested Cloudflare adapter.
- **Cloudflare D1:** viable for bounded relational workloads and atomic batches, but single-threaded per-database execution and its batch API require a different concurrency/migration design. Static Cloudflare hosting does not require D1, and no measured need justifies changing the PostgreSQL proposal.
- **Document database / separate databases per module:** add consistency/operations work without a demonstrated pilot need.

This is application-design judgment, not a vendor benchmark. PostgreSQL documents [constraints](https://www.postgresql.org/docs/current/ddl-constraints.html), [row locks](https://www.postgresql.org/docs/18/explicit-locking.html) and [row security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html). Cloudflare documents [PostgreSQL connections](https://developers.cloudflare.com/hyperdrive/examples/connect-to-postgres/), [query caching](https://developers.cloudflare.com/hyperdrive/concepts/query-caching/), and D1 [atomic batches](https://developers.cloudflare.com/d1/worker-api/d1-database/) and [single-threaded execution](https://developers.cloudflare.com/d1/reference/faq/). Supabase provides [PostgreSQL](https://supabase.com/docs/guides/database/overview) and [connection options](https://supabase.com/docs/guides/database/connecting-to-postgres). Checked 13 October 2026; verify actual provider behavior/terms in the spike.

## Consequences

DCB-E18 adds three foundations stories totaling 24 estimated hours; domain criteria are extended instead of duplicated. October becomes 180 hours across 54 stories, with October 31 conditional on capacity/gates. Backup stays DCB-E08-S05, encryption DCB-E08-S03, and later generalized provider retries DCB-E08-S06. No database/runtime is installed or feature marked implemented by this decision.
