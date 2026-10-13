# ADR 0003 External wallet pilot

**Status:** Accepted for October private MVP.

TheDigitalCardBox stores confirmed host supplied routing details for one or more Cash App, Venmo and Zelle services. The guest selects one, reviews its full details, acknowledges the need to check the payee in the external service, and chooses to leave the site. The server checks active route version and event state at handoff. A destination change invalidates old handoffs and pauses only that service until reconfirmed.

The app does not process, hold, verify or reverse external gift funds. A host may record a receipt after independently checking their service account, with **host confirmed** wording. There is no platform verified payment state in this phase. Integrated payments require a new ADR, provider agreement and ledger design.
