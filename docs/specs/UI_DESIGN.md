# TheDigitalCardBox application UI

**Updated:** 13 October 2026. **Stage:** owner design review, before backend implementation.

## Visual direction

Retain the current branch's founder logo, `public/theme.css` palette and locally
hosted Forum, Montserrat and Hanken Grotesk fonts. La Belle Aurore remains the
documented decorative fallback until a licensed Miss Noteworthy webfont is
supplied. Public pages use generous spacing, white panels, blush backgrounds,
editorial photography and direct occasion-specific creation calls to action.

The composer includes a guided relationship/tone/length/memory writing panel
with three editable prepared choices. Live AI is explicitly unconnected;
manual notes always remain available.

Cards use six original code-native vector directions: Pressed Peony, Golden
Hour, Written in the Stars, With Love, Wildflower Letter and A Moment to Keep.
Do not add generated background art to the core collection. The founder's logo
stays in the shared header/footer, not on guest cards or book entries. Long text
must wrap and expand without clipping. Every decorative illustration is hidden
from assistive technology; each personal note remains real readable text.

The event book starts with an editorial cover and dedication, followed by paired
spreads with readable notes and photo compositions. A second collage layout
places illustrated cards on paper-like spreads. Include a text-reading mode,
previous/next controls, current spread, readable export and print view. Only
currently consented and unhidden entries appear. The owner confirmed the elegant
editorial album with curated collage spreads as the leading direction. The
Editorial stays the default and The Collage remains available. Detailed artwork
polish and actual device review remain open; automated checks do not certify
visual quality.

## Account-free design review

All records are fictional. No authentication, private server storage, message
delivery, checkout, provider transaction import, live AI or licensed GIF API is
connected. Workspace edits persist in browser local storage; guest drafts use
per-invitation session storage. Storage failures are surfaced. Account reset
restores fictional records. Uploaded images stay on the device, with a 2 MB
limit. No password or provider credential is collected. Public pages do not use
the old sample-site banner or navigation.

The entry screen shows planned Apple, Google, Amazon and email choices with a
clear **Continue without signing in** path, as confirmed by the owner. Creation
buttons retain this account-choice step before event setup. Provider buttons explain their
unconnected state rather than simulate authentication. This is an intentional
review affordance, not an account or access-control implementation.

The review build sets noindex/nofollow/noarchive and same-origin referrers.
These prevent ordinary indexing/referrer disclosure and are not authorization.
Before public launch, make indexing policy route-specific on the server.

Never put real customer data into this build. Client-side routes, role labels,
UUID links, hidden navigation and local storage cannot protect private data.
Production requires the server-side gates in SECURITY_PAYMENT.md and
MVP_ACCEPTANCE.md. Keep this work off PROD until the owner chooses a release.

## Page map

| Route | Purpose |
| --- | --- |
| `/` | Occasion-led creation, card collection, product story |
| `/start?occasion=Wedding` | Account choices, account-free continuation |
| `/how-it-works`, `/cards`, `/pricing`, `/about` | Product discovery, art collection, book tiers |
| `/contact` | Support/info addresses and a local email draft; no silent sending |
| `/privacy`, `/terms`, `/accessibility` | Accurate workspace disclosures, use guidance and accessibility contact |
| `/workspace` | Host card-box directory with open, draft and closed occasions |
| `/workspace/new` | Occasion, title, host names, date/time zone, welcome, cover |
| `/workspace/events/:id/overview` | Cards/photos/gifts counts and next actions |
| `/workspace/events/:id/edit` | Editable details; date/type lock after contributions |
| `/workspace/events/:id/share` | Publication, guest preview, copy invite, functional downloadable QR |
| `/workspace/events/:id/cards` | Search/filter/read, host-only status, hide/remove, local CardVault export |
| `/workspace/events/:id/gifts` | Sender/payment alias/reference, receipt review and host-only confirmation |
| `/workspace/events/:id/book` | Editorial/collage, consent filtering, text view, export/print |
| `/workspace/events/:id/settings` | Pause/revoke invitation, per-service double entry and confirmation |
| `/workspace/account` | Device profile/preferences, motion setting, reset and admin review entry |
| `/g/:opaqueToken` | Invitation-only guest landing; no public event directory |
| `/g/:opaqueToken/card` | Template, note, optional photo/GIF, explicit book consent |
| `/g/:opaqueToken/review` | Full card and text review, local send action |
| `/g/:opaqueToken/gift` | Independent optional gift, exact recipient, matching reference |
| `/g/:opaqueToken/thanks` | Card/gift outcome with honest unconfirmed status |
| `/admin/overview` | Aggregate fictional workspace metrics, no private card text |
| `/admin/features` | Device-only switches for creation, gifts, GIFs, prompts and books |
| `/admin/events`, `/admin/activity` | Minimal event metadata and change history |

Unknown or draft invitation tokens reveal no event. Scheduled, paused, expired
and gift-only states have distinct routes/actions. Public navigation has no
event guest link; the host's share panel supplies preview and QR. Rotating the
token invalidates old local links. Custom event links work only in the same
browser until connected storage exists. Legacy `/prototype/index.html` and
`/host` lead to the host workspace; `/guest` no longer opens a public event.

## Gift matching and media boundaries

Collect the guest's known name, optional payment-app name, intended amount and
an opaque per-contribution matching reference that may be copied into a memo.
These are clues, not a provider transaction ID. The host must check their own
account before marking **host confirmed**, and can undo the mark. Changing
services or destination versions resets recipient acknowledgment. Disabled and
unconfirmed destinations do not appear to guests. No payment app or transfer is
opened by this review build.

Do not assume peer-to-peer transaction data is available. Cash App's documented
Pay integrations describe approved merchant/platform arrangements, not generic
read access to arbitrary personal accounts. [Partner requirements](https://developers.cash.app/docs/partner/partner-onboarding/integrating-with-cash-app-pay/partner-with-cash-app-pay)
and [Pay with Venmo](https://developer.paypal.com/v5/venmo/overview) are inputs to
the provider discovery story, not evidence that this external-gift app is
approved. Evaluate per-provider account eligibility, consent, permitted data,
cost and supported identifiers before choosing an integration. Keep manual
receipt checks as the fallback and ambiguity unresolved.

The searchable local GIF collection consists of six original vector animations
with static SVG posters. No third-party search request is made. Motion is
opt-in, pausable and suppressed in reduced-motion mode. A future catalog needs
approved API access, filtering, attribution, error states and retention/export
rights. [GIPHY's documentation](https://developers.giphy.com/docs/api/) requires
attribution and describes Search/Trending; it does not by itself grant book
export rights. Provider selection remains open.

## Accessibility and verification

Target [WCAG 2.2 AA](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).
Use real links, semantic landmarks/headings, labeled inputs, fieldsets, keyboard
skip/navigation, main-content focus after routing, visible focus, live status
messages, non-color status text, reduced motion and responsive text reflow.
Avoid drag-only controls, animated search tiles and fixed-height note clipping.
All pages have the copyright/footer and an accessibility contact path.

`npm run test:ui` runs browser journeys and axe checks. It covers direct links,
refresh, local drafts, consent/hidden book filtering, gift acknowledgment,
honest receipt states, switches, closed/revoked links, keyboard navigation and
320/375/768/1280 px layouts. Automated success does not establish ADA compliance
or replace assistive-technology, real-phone and owner review. Backend acceptance
criteria remain open even when their UI is reviewable.
