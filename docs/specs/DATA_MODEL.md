# Planned server data and ownership

This is a contract for the production backend, not a claim that the local UI starter persists data. All rows use opaque IDs, created and updated timestamps, and constrained ownership.

| Module | Records it owns | Main invariants |
| --- | --- | --- |
| Identity | hosts, sessions, role grants | Only verified authenticated hosts can change owned events. |
| Events | events, share tokens, lifecycle dates | Guest windows derive from event timezone on every server write; date cannot reset after a contribution or gift attempt. |
| Cards | notes, cards, photos, consent, moderation | A submission is independent of gifts; private media cannot be guessed from a URL. |
| AI | bounded jobs, prompt version, usage counters | AI cannot authoritatively create or publish guest content. |
| Gifts | destination routes, route versions, gift intents, host receipt marks | One active confirmed destination per service; only host-checked external receipt can be labeled host confirmed. |
| Book | consented entry projection, snapshots, basic exports | New entries stop at day 90; basic private access continues. |

Cross-module coordination uses public application interfaces and idempotent events, not direct reads of another module's internal tables. See [ADR 0002](../adr/0002-modular-backend.md).
