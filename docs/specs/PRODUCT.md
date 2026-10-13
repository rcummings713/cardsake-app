# DigitalCardBox product specification

**Version:** 13 October 2026. **Target:** private external-wallet MVP by 31 October 2026.

The product name is **DigitalCardBox**. See [ADR 0004](../adr/0004-product-name.md) for repository and backlog naming.

## Product promise

The host creates an event or occasion page and shares a single link or QR. Guests leave a note or card, may attach one bounded photo, and can choose a host-enabled external gift service. The host keeps a private CardVault and basic export. Words and gifts are independent: a note needs no gift, a gift needs no note, and an AI failure cannot prevent manual writing.

## October scope

1. Managed host sign-in with verified email, server-side event ownership and fresh authentication for publishing or changing gift destinations.
2. Dated event or bounded undated occasion; stable, unguessable and revocable guest link; QR points to the same link.
3. Server checks opening, contribution and final gift deadlines on every write. For dated events, open no earlier than six months before the event; cards, notes and photos close 90 days after. A wedding may remain gift-only until 12 months after; other events close at day 90. An undated page closes within 90 days of publication. Closed links show a closed page. The host retains private CardVault access and export.
4. Manual note, editable card templates, optional bounded photo and explicit book visibility consent. Guided AI offers three editable text choices and card copy/layout suggestions. The server caps and moderates requests. Static templates work without AI. Image generation is a follow-on pilot experiment.
5. Host may enable any subset of Cash App, Venmo and Zelle. Each service has one exact destination, entered twice and explicitly confirmed by the host after checking that service. A change pauses only that service until fresh confirmation; other confirmed services remain active. Keep an audit record and alert the host.
6. Guest selects an enabled service, sees the host-supplied recipient and full identifier, confirms they will check the recipient inside that service, and then receives an allowlisted server-generated handoff. Switching services or a destination version invalidates that acknowledgment. Never trust a host-supplied arbitrary redirect.
7. The app labels a handoff as **unconfirmed**. Only the host can mark a gift **host confirmed** after checking their own account. A click, return URL or guest report is not proof of receipt.
8. Private host dashboard, consented event-book view, moderation and basic export. Guests are never blocked at premium book entry thresholds.

## Persistent customer, guest and gift records

Production follows [DATA_MODEL.md](DATA_MODEL.md) and [ADR 0005](../adr/0005-database-design.md), with managed PostgreSQL and private photo/export storage. Registered customers represent hosts; anonymous guests are event-scoped and independent of expiring sessions. Cards, consent, destination versions, external gift intent/activity and host receipt marks persist independently. UI data remains sample-only.

External gift activity is not proof of a financial transaction. Future premium purchase transactions and approved integrated gift ledgers are separate Post-MVP contracts. Guest intake closure does not delete CardVault records; ongoing private access follows a published retention/deletion policy.

## Beyond October

Supervised live occasions and optional generated backgrounds extend the free pilot. Later candidates include $4.99 premium cards, $15/$30/$79 polished event books priced from 0–99 / 100–299 / 300+ included entries after day 90, hosted product checkout, approved integrated cash processing, licensed art/GIFs and music clips, advanced AI editing, reminders, printed books, video, referrals, pooled gifts, international rails and native mobile apps. The [backlog](../../planning/backlog.md) retains all candidates.

The $500 developer payment is a one-time, indefinitely fixed arrangement for planned code work. It is separate from vendor, hosting, artwork, counsel, licensing and payment-service costs.
