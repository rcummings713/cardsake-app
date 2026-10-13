# ADR 0002 Orthogonal modular backend

**Status:** Accepted for the MVP.

Use one repository and one modular application. Identity, Events, Cards, AI, Gifts and Book own separate domain rules and data. HTTP routes call application use cases; use cases depend on ports; infrastructure adapters implement ports. A module can call another module's public contract but cannot import its private database model or vendor SDK. Long-running AI work can run in a separate worker process from the same repo.

This allows a note without a gift, a gift without a note, and manual writing during AI failure. Event closure blocks new actions while old gift records and private host access remain. Keep transaction boundaries, outbox or safe retry semantics explicit. Splitting repositories is an operational decision for later, not a requirement of orthogonality.

## Database contract clarification — 13 October 2026

ADR 0005 assigns schemas in one PostgreSQL database. Migration adapters can declare reviewed FKs to public IDs; runtime modules cannot query private models across boundaries. Public repository operations share a composition-layer transaction for event locks, selected routes and outbox writes. Book consumes revisioned public events and obtains content from Cards' public contract.

Platform audit/idempotency/outbox owns execution metadata, not domain policy. Future Billing owns platform orders/payments/entitlements separately from Gifts' approved ledger. This adds no October checkout or integrated processing.
