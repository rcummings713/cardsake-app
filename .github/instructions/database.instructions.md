---
applyTo: "src/infrastructure/**,src/modules/**/adapters/**,migrations/**"
---

Read docs/specs/DATA_MODEL.md and ADR 0005 before adding tables or persistence adapters. Use one ordered migration history with module ownership in a managed PostgreSQL database. The production runtime/provider remains subject to ADR 0001's spike; do not infer database capabilities from the static Cloudflare preview.

Use opaque IDs, typed timestamps/money, same-event composite FKs, narrow runtime privileges and reviewed indexes. FKs to public IDs do not permit runtime private-table queries across module boundaries. Share a composition-layer transaction through public repository operations for event locks, route checks, content/consent and outbox writes.

Keep customer identities singular and guests event-scoped, independent of session expiry. Notes/cards share submissions; CardVault/Book must not duplicate authoritative content. External gift intent/activity never becomes a settled financial transaction. Future platform sales and approved gift ledgers have distinct owners and gates.

Application-encrypt destinations/share secrets with external versioned keys. Never persist credentials, bearer secrets, arbitrary host redirects, signed URLs or private content in audit/outbox. Retry only bounded idempotent work; revalidate current access and routes before a repeated handoff. No AI/email/storage network call inside an open SQL transaction.

Validate empty/repeated migrations, recovery, cross-event rejection, relevant concurrent writes and duplicate/out-of-order delivery. Restore/deletion policy includes private objects, keys and tombstones; ordinary event closure cannot delete accepted memories.
