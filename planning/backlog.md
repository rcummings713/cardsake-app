# Cardsake development backlog

**October private MVP target:** 31 October 2026 · 156 focused developer hours across 51 stories.
**Status:** AI-drafted estimates; release depends on acceptance gates, not date alone.

## October schedule

| Due | Issue | Story | Hours |
| --- | --- | --- | ---: |
| 2026-10-13 | CS-E08-S03 | Protect secrets and destinations | 3 |
| 2026-10-14 | CS-E01-S01 | Deploy static demo | 4 |
| 2026-10-14 | CS-E01-S02 | Make demo boundaries visible | 2 |
| 2026-10-16 | CS-E01-S03 | Make the demo link shareable | 2 |
| 2026-10-16 | CS-E02-S01 | Managed host sign-in | 7 |
| 2026-10-16 | CS-E03-S01 | Create dated event or occasion | 6 |
| 2026-10-17 | CS-E02-S02 | Enforce event ownership | 4 |
| 2026-10-17 | CS-E03-S02 | Publish one shareable URL | 3 |
| 2026-10-18 | CS-E01-S04 | Review the prototype on phones | 2 |
| 2026-10-18 | CS-E01-S05 | Capture tester feedback | 2 |
| 2026-10-18 | CS-E02-S03 | Protect sensitive host actions | 5 |
| 2026-10-18 | CS-E02-S04 | Issue scoped guest sessions | 3 |
| 2026-10-18 | CS-E03-S03 | Generate QR from the same URL | 2 |
| 2026-10-18 | CS-E08-S01 | Authorize every server operation | 3 |
| 2026-10-20 | CS-E04-S01 | Write and submit a note | 4 |
| 2026-10-21 | CS-E04-S02 | Style a card with templates | 5 |
| 2026-10-21 | CS-E04-S03 | Submit card without gift | 2 |
| 2026-10-22 | CS-E03-S04 | Open no earlier than six months | 3 |
| 2026-10-22 | CS-E03-S05 | Close book contributions after day 90 | 3 |
| 2026-10-22 | CS-E05-S01 | Generate three guided note choices | 4 |
| 2026-10-23 | CS-E03-S06 | Keep late wedding gifts open | 3 |
| 2026-10-23 | CS-E03-S07 | Show a closed landing page | 2 |
| 2026-10-23 | CS-E04-S04 | Attach an optional photo | 5 |
| 2026-10-23 | CS-E05-S02 | Accept optional memory without invention | 2 |
| 2026-10-24 | CS-E03-S08 | Prevent deadline reset and revoke links | 4 |
| 2026-10-24 | CS-E04-S05 | Choose book visibility | 2 |
| 2026-10-24 | CS-E05-S03 | Moderate and cap note requests | 3 |
| 2026-10-24 | CS-E07-S01 | Show private host dashboard | 3 |
| 2026-10-25 | CS-E04-S06 | Hide and remove inappropriate content | 3 |
| 2026-10-25 | CS-E05-S04 | Keep manual composer on AI failure | 2 |
| 2026-10-25 | CS-E05-S07 | Budget AI and preserve fallback | 2 |
| 2026-10-25 | CS-E07-S04 | Freeze book after day 90 | 2 |
| 2026-10-26 | CS-E06-S01 | Configure several payment services | 5 |
| 2026-10-26 | CS-E06-S02 | Double-enter and confirm each identifier | 3 |
| 2026-10-27 | CS-E06-S03 | Pause only a changed service | 3 |
| 2026-10-27 | CS-E06-S04 | Let guest choose a service | 3 |
| 2026-10-28 | CS-E06-S05 | Reset review when guest switches | 2 |
| 2026-10-28 | CS-E06-S06 | Show exact payee before leaving | 3 |
| 2026-10-29 | CS-E02-S05 | Alert hosts to destination changes | 3 |
| 2026-10-29 | CS-E06-S07 | Validate selected route atomically | 4 |
| 2026-10-29 | CS-E06-S08 | Keep external status honest | 2 |
| 2026-10-30 | CS-E06-S09 | Let host mark a checked receipt | 2 |
| 2026-10-30 | CS-E06-S10 | Respect gifting deadlines | 2 |
| 2026-10-30 | CS-E07-S02 | Create consented event book view | 3 |
| 2026-10-30 | CS-E07-S03 | Export basic CardVault privately | 3 |
| 2026-10-30 | CS-E08-S02 | Protect browser requests | 3 |
| 2026-10-30 | CS-E08-S04 | Limit abuse and uploads | 2 |
| 2026-10-30 | CS-E08-S05 | Test backup and restore | 2 |
| 2026-10-31 | CS-E08-S08 | Run mobile and accessibility checks | 3 |
| 2026-10-31 | CS-E09-S02 | Check every published payee | 2 |
| 2026-10-31 | CS-E09-S03 | Run scripted money-state tests | 4 |

## All epics and stories

### CS-E01 Disposable public prototype

Release: October 2026 private MVP and follow-on. A public demo URL shows the intended guest and host flow without real accounts or transfers

- **CS-E01-S01 Deploy static demo** — October 2026 private MVP. As a founder, I want a temporary public URL so that I can show the prototype to hosts and guests.
  - The root URL loads the guest landing page on mobile and desktop.
  - The prototype is served over HTTPS and can be deleted without affecting future production.
- **CS-E01-S02 Make demo boundaries visible** — October 2026 private MVP. As a visitor, I want to know this is a demo so that I do not try to send money or enter sensitive data.
  - Every payment control states no app opens and no transfer occurs.
  - Sample host identifiers and non-persistent content are clearly labeled.
- **CS-E01-S03 Make the demo link shareable** — October 2026 private MVP. As a founder, I want the Copy link button to use the deployed URL so that testers reach the live prototype.
  - Copied URL opens the guest landing page.
  - A decorative QR is not presented as a scannable QR.
- **CS-E01-S04 Review the prototype on phones** — October 2026 private MVP. As a founder, I want to test the flow on a phone so that screens are usable at an event.
  - Guest and host navigation, service picker, card editor and book preview work at common mobile widths.
  - Keyboard focus and button labels remain visible.
- **CS-E01-S05 Capture tester feedback** — October 2026 private MVP. As a founder, I want a simple feedback checklist so that the first hosted demo teaches us what to build.
  - Record task completion, confusion points and wrong-payee concerns.
  - Convert validated findings to backlog issues before MVP implementation.

### CS-E02 Identity and access

Release: October 2026 private MVP and follow-on. Hosts control private event data while guests can contribute through scoped sessions

- **CS-E02-S01 Managed host sign-in** — October 2026 private MVP. As a host, I want to sign in securely so that I can manage my event.
  - Use a managed identity provider and verified email.
  - Server stores provider subject and role, not a custom password database.
- **CS-E02-S02 Enforce event ownership** — October 2026 private MVP. As a host, I want only authorized hosts to see my private event data so that gifts and notes remain private.
  - Every host read and write checks ownership or explicit membership on the server.
  - Cross-event access tests are denied.
- **CS-E02-S03 Protect sensitive host actions** — October 2026 private MVP. As a host, I want a fresh sign-in for payment destination edits and exports so that stolen sessions have less power.
  - Require step-up authentication on sensitive actions.
  - Log actor, event, action and time.
- **CS-E02-S04 Issue scoped guest sessions** — October 2026 private MVP. As a guest, I want to leave a note without an account so that contributing is easy.
  - Issue a short-lived event-scoped session and store only its token hash.
  - A guest cannot read or edit another guest’s private draft.
- **CS-E02-S05 Alert hosts to destination changes** — October 2026 private MVP. As a host, I want notice when a payment account changes so that I can catch unauthorized edits.
  - Send a change alert containing service and change time without sensitive secrets.
  - Keep old and new route versions in an audit trail.
- **CS-E02-S06 Separate operator privileges** — Post-MVP. As an operator, I want limited support access so that production support does not expose unrelated private data.
  - Support roles use multifactor authentication and least privilege.
  - Private note access is audited and not available by default.

### CS-E03 Event pages, links and time windows

Release: October 2026 private MVP and follow-on. One stable event URL supports the full contribution and gift lifecycle

- **CS-E03-S01 Create dated event or occasion** — October 2026 private MVP. As a host, I want to enter an event date, time zone and page type so that the opening and closing dates are accurate.
  - Server derives allowed windows in the event time zone.
  - An undated one-off page must choose a close date within 90 days.
- **CS-E03-S02 Publish one shareable URL** — October 2026 private MVP. As a host, I want one link that I can text or email so that remote guests reach the event.
  - Generate an opaque, unguessable slug.
  - Public page exposes only approved event fields.
- **CS-E03-S03 Generate QR from the same URL** — October 2026 private MVP. As a host, I want a printable QR so that in-person guests reach the same page.
  - QR encodes only the stable event URL, never a wallet identifier.
  - Scanning and clicking return the same event state.
- **CS-E03-S04 Open no earlier than six months** — October 2026 private MVP. As a host, I want to open contributions up to six months before the event so that guests can participate early.
  - Scheduled pages reject new notes, cards, art jobs and gift intents before opens_at.
  - Guest sees the opening state.
- **CS-E03-S05 Close book contributions after day 90** — October 2026 private MVP. As a host, I want new notes, cards and photos to stop 90 days after the event so that the book can be finalized.
  - Server rejects these writes after the boundary.
  - Existing private content and export remain available to the host.
- **CS-E03-S06 Keep late wedding gifts open** — October 2026 private MVP. As a guest, I want a gift-only route through month 12 after a wedding so that I can give late without changing the book.
  - Only new gifts are permitted after day 90 and through month 12.
  - Non-wedding events close gift intake at day 90.
- **CS-E03-S07 Show a closed landing page** — October 2026 private MVP. As a visitor, I want a clear closed message so that I do not attempt an unavailable action.
  - Old link and QR still open a closed page.
  - No new card or gift intent can be initiated after final close.
- **CS-E03-S08 Prevent deadline reset and revoke links** — October 2026 private MVP. As a host, I want to close or rotate a compromised link so that I can protect the event.
  - Date and closing window cannot move after first contribution or gift attempt.
  - Revocation can close earlier and invalidates the old slug.

### CS-E04 Manual notes, cards and photos

Release: October 2026 private MVP and follow-on. Guests can create personal content without AI or a cash gift

- **CS-E04-S01 Write and submit a note** — October 2026 private MVP. As a guest, I want to write my own message so that I can contribute without AI.
  - Text remains editable until submission.
  - Server validates length, consent and active contribution window.
- **CS-E04-S02 Style a card with templates** — October 2026 private MVP. As a guest, I want to choose a layout, palette and motif so that my card feels personal.
  - A static template is immediately available.
  - Final text is rendered separately from background art for readability.
- **CS-E04-S03 Submit card without gift** — October 2026 private MVP. As a guest, I want to submit a card without money so that participation is never tied to payment.
  - Card creation does not require a gift ID.
  - Gift failure cannot remove a submitted card.
- **CS-E04-S04 Attach an optional photo** — October 2026 private MVP. As a guest, I want to attach a photo so that the host can remember the occasion.
  - Enforce type, size and dimension limits and scan uploads.
  - Private storage and short-lived access URLs are used.
- **CS-E04-S05 Choose book visibility** — October 2026 private MVP. As a guest, I want to control whether my message appears in the shared book so that my preferences are respected.
  - Consent is explicit and saved with the submission.
  - Private submissions are excluded from the consented book view.
- **CS-E04-S06 Hide and remove inappropriate content** — October 2026 private MVP. As a host, I want to moderate guest content so that the book is safe to share.
  - Host can hide or remove an entry with an audit record.
  - Removal is reflected in later exports.

### CS-E05 AI note and artwork assistance

Release: October 2026 private MVP and follow-on. AI offers bounded editable choices while manual creation always remains available

- **CS-E05-S01 Generate three guided note choices** — October 2026 private MVP. As a guest, I want to select relationship, tone and length so that AI suggests usable notes.
  - Return three distinct short options.
  - Guest selects and edits one before submission.
- **CS-E05-S02 Accept optional memory without invention** — October 2026 private MVP. As a guest, I want to add a memory so that suggestions feel personal.
  - Treat guest detail as data, not instructions.
  - With no detail, produce general wording without fabricated memories.
- **CS-E05-S03 Moderate and cap note requests** — October 2026 private MVP. As an operator, I want AI requests bounded so that abuse and cost stay manageable.
  - Validate sessions and event window before provider calls.
  - Apply input caps, quotas, output validation and refusal fallback.
- **CS-E05-S04 Keep manual composer on AI failure** — October 2026 private MVP. As a guest, I want to finish my note if AI is unavailable so that I am never blocked.
  - Timeout, refusal or malformed output preserves the manual editor.
  - An AI error does not create or erase a card.
- **CS-E05-S05 Generate two artwork variations** — Post-MVP. As a guest, I want up to two background options so that I can choose a look.
  - One active art job per session and two variations maximum.
  - Return approved private previews through short-lived URLs.
- **CS-E05-S06 Render readable card typography** — Post-MVP. As a guest, I want names and message text legible so that artwork does not distort them.
  - Place precise text in an HTML or SVG overlay.
  - Contrast and export rendering match the preview.
- **CS-E05-S07 Budget AI and preserve fallback** — October 2026 private MVP. As a founder, I want request usage measured so that a free pilot does not create runaway costs.
  - Record token/image usage without private memories in logs.
  - Budget switch disables AI while templates and manual notes continue.

### CS-E06 External cash gifts with guest choice

Release: October 2026 private MVP and follow-on. Guests choose among host-confirmed services and pay the host outside the app

- **CS-E06-S01 Configure several payment services** — October 2026 private MVP. As a host, I want to enable Cash App, Venmo and Zelle together so that guests can choose the service they use.
  - Allow any nonempty subset with one active destination per service.
  - Only confirmed enabled routes appear to guests.
- **CS-E06-S02 Double-enter and confirm each identifier** — October 2026 private MVP. As a host, I want to enter each account twice so that I can catch typing errors.
  - Require exact match, format validation, host ownership acknowledgment and review in that service.
  - Do not accept arbitrary redirect URLs or account credentials.
- **CS-E06-S03 Pause only a changed service** — October 2026 private MVP. As a host, I want to edit or disable one destination so that other services remain available.
  - Fresh authentication, audit and alert are required.
  - Edited route disappears until reconfirmed; other confirmed routes continue.
- **CS-E06-S04 Let guest choose a service** — October 2026 private MVP. As a guest, I want to select from the host’s enabled services so that I can use an app I have.
  - Show only currently confirmed routes.
  - Selecting another service updates the full recipient and identifier.
- **CS-E06-S05 Reset review when guest switches** — October 2026 private MVP. As a guest, I want a fresh recipient check after switching services so that I do not approve the wrong destination.
  - Changing service or route version clears acknowledgment.
  - Handoff stays disabled until the selected route is reviewed again.
- **CS-E06-S06 Show exact payee before leaving** — October 2026 private MVP. As a guest, I want to see the host-supplied name and exact identifier so that I can compare the recipient in my payment app.
  - Prominent adjacent copy states who supplied the details and that the app has not independently verified them.
  - Mismatch tells guest to stop and contact host by a known channel.
- **CS-E06-S07 Validate selected route atomically** — October 2026 private MVP. As an operator, I want stale or cross-event gift intents rejected so that a switched or disabled account is not used.
  - Store selected_service, destination_id and version with the intent.
  - Server rejects stale, disabled, unconfirmed or wrong-event route at handoff.
- **CS-E06-S08 Keep external status honest** — October 2026 private MVP. As a guest, I want the app to state what it knows so that a click is not mistaken for a successful payment.
  - Link opened and guest reported remain unverified.
  - No external handoff is labeled provider verified.
- **CS-E06-S09 Let host mark a checked receipt** — October 2026 private MVP. As a host, I want to mark a gift received after checking that provider account so that my private list is useful.
  - UI labels it host marked received.
  - Host review records actor and time without claiming provider confirmation.
- **CS-E06-S10 Respect gifting deadlines** — October 2026 private MVP. As a host, I want gift initiation blocked after close so that old links cannot be used indefinitely.
  - Active and wedding gift-only states allow new intents.
  - Final closure rejects new intents while permitting prior reconciliation.

### CS-E07 Host dashboard, CardVault and event book

Release: October 2026 private MVP and follow-on. The host keeps private memories and can export them after guest intake closes

- **CS-E07-S01 Show private host dashboard** — October 2026 private MVP. As a host, I want to view entries and gift intent states so that I can manage my event.
  - Host-only view displays approved cards and unverified/host marked gift states separately.
  - Guest link never grants dashboard access.
- **CS-E07-S02 Create consented event book view** — October 2026 private MVP. As a host, I want a book of allowed notes and photos so that I can revisit them.
  - Book includes only consented and unhidden entries.
  - A card with an attached photo counts as one entry.
- **CS-E07-S03 Export basic CardVault privately** — October 2026 private MVP. As a host, I want a basic export even if I never buy an upgrade so that my memories remain accessible.
  - Host can request export after closure.
  - Signed download is short-lived and audited.
- **CS-E07-S04 Freeze book after day 90** — October 2026 private MVP. As a host, I want a stable snapshot after new entries close so that book pricing and layout can be final.
  - No late wedding gift adds a new book entry.
  - Snapshot records included count and timestamp.
- **CS-E07-S05 Preview book tiers without guest cap** — Post-MVP. As a host, I want the projected $15/$30/$79 price to follow included entry count so that no guest is blocked.
  - Show 0–99, 100–299 and 300+ tiers.
  - Quote final tier after day 90; no preselected guest list or contribution cap.
- **CS-E07-S06 Honor later removal requests** — Post-MVP. As a guest, I want an allowed removal request to affect later exports so that my content preferences are respected.
  - Host moderation or deletion updates read model and subsequent export.
  - Required financial records, if any, follow separate retention policy.

### CS-E08 Security, privacy and reliability

Release: October 2026 private MVP and follow-on. Authentication, data boundaries and failure tests protect the pilot

- **CS-E08-S01 Authorize every server operation** — October 2026 private MVP. As a host, I want another event’s users blocked from my data so that private content stays private.
  - Validate actor and event from server session, not browser-supplied role.
  - Cover read, write, export, media and job status routes.
- **CS-E08-S02 Protect browser requests** — October 2026 private MVP. As an operator, I want common web attacks mitigated so that basic routes are not easy to abuse.
  - Use secure cookies, CSRF or strict Origin checks, output escaping and a restrictive CSP.
  - Test expired sessions and privilege changes.
- **CS-E08-S03 Protect secrets and destinations** — October 2026 private MVP. As a host, I want account identifiers and API keys handled carefully so that exposure is limited.
  - Keep provider secrets server-side; encrypt sensitive destinations at rest.
  - No bank credentials, passwords or payment details in analytics/logs.
- **CS-E08-S04 Limit abuse and uploads** — October 2026 private MVP. As an operator, I want rate limits and file checks so that malicious traffic does not overwhelm the app.
  - Rate-limit session, AI and upload routes.
  - Reject unsupported/oversized files and scan approved uploads.
- **CS-E08-S05 Test backup and restore** — October 2026 private MVP. As a host, I want my accepted cards recoverable so that an outage does not erase the event.
  - Run tested database backup and restore.
  - Private media retention and deletion rules are documented.
- **CS-E08-S06 Make retried work safe** — Post-MVP. As an operator, I want jobs and callbacks to tolerate retries so that duplicate events do not create inconsistent state.
  - Use idempotency keys or unique event IDs.
  - Replay tests cover duplicate and out-of-order events.
- **CS-E08-S07 Observe failures and spend** — Post-MVP. As a founder, I want error and usage dashboards so that I can detect problems during the pilot.
  - Log minimal event IDs, action outcome, latency and cost.
  - Alert on auth failures, AI spend and gift-route mismatches without logging private text.
- **CS-E08-S08 Run mobile and accessibility checks** — October 2026 private MVP. As a guest, I want screens I can use on a phone or keyboard so that I can participate at an event.
  - Test focus order, labels, contrast and responsive layouts.
  - High priority blockers are fixed before supervised pilot.

### CS-E09 Supervised pilot and learning

Release: October 2026 private MVP and follow-on. Two supervised events validate completion, correct destinations and real demand

- **CS-E09-S01 Recruit pilot hosts** — Post-MVP. As a founder, I want a small set of suitable hosts so that I can test realistic occasions.
  - Recruit 5–10 interested hosts and select two supervised events.
  - Explain prototype limitations and support contact.
- **CS-E09-S02 Check every published payee** — October 2026 private MVP. As a founder, I want to compare host-entered routes to their payment apps so that wrong destinations are caught before guests use them.
  - Host confirms each enabled account and display name.
  - Record mismatch and resolution without collecting account credentials.
- **CS-E09-S03 Run scripted money-state tests** — October 2026 private MVP. As a founder, I want wrong-account and closure scenarios tested so that we do not falsely claim gifts were paid.
  - Test switches, stale versions, disabled routes, event boundary and host-marked status.
  - No unresolved wrong-destination defect at release gate.
- **CS-E09-S04 Measure guest completion** — Post-MVP. As a founder, I want separate conversion for notes, cards and gift handoffs so that I know where users struggle.
  - Record privacy-safe funnel events and mobile failures.
  - Separate link opens from host-confirmed external receipt.
- **CS-E09-S05 Triage and decide next phase** — Post-MVP. As a founder, I want a release decision based on pilot evidence so that later costs are justified.
  - Review support complaints, usage and premium interest.
  - Record go/no-go and priority fixes before integrated payments or licensed music.

### CS-E10 Optional premium cards and books

Release: Post-MVP. Sell optional design upgrades and polished books without charging for basic participation

- **CS-E10-S01 Offer premium card design** — Post-MVP. As a guest, I want to see a $4.99 premium card option so that I can choose a richer design.
  - Free manual path remains.
  - Premium status and price are clear before checkout.
- **CS-E10-S02 Quote book price from included entries** — Post-MVP. As a host, I want a final server quote so that I pay for the correct $15/$30/$79 tier.
  - Tier uses 0–99, 100–299 or 300+ consented entries after day 90.
  - Price cannot be altered by the browser.
- **CS-E10-S03 Use hosted product checkout** — Post-MVP. As a buyer, I want to pay for a card or book through a hosted payment page so that the app does not collect my card details.
  - Create server-side order and provider session.
  - Do not store PAN/CVV or treat return URL as payment proof.
- **CS-E10-S04 Grant paid entitlement on signed event** — Post-MVP. As a buyer, I want access to the upgrade after payment so that I receive what I bought.
  - Verified provider event is replay-safe.
  - Entitlement applies once to the correct card or event.
- **CS-E10-S05 Handle failed checkout and refund** — Post-MVP. As a buyer, I want an honest order status so that I know whether I was charged.
  - Pending and failed payments do not unlock.
  - Refund updates entitlement and purchase history.
- **CS-E10-S06 Track product margins** — Post-MVP. As a founder, I want to compare revenue with processing, AI and media costs so that prices can be adjusted.
  - Report paid conversion by tier and product contribution.
  - Gift principal is never counted as platform revenue.

### CS-E11 Approved integrated gift payments

Release: Post-MVP. A provider-approved future route can process gift checkout with a reconciled ledger

- **CS-E11-S01 Secure written provider approval** — Post-MVP. As a founder, I want provider approval for the exact gifting flow so that checkout fits underwriting and legal roles.
  - Document merchant of record, custody, fees, payout timing, disputes and refunds.
  - Do not enable live integrated gifts before written acceptance.
- **CS-E11-S02 Onboard recipient through provider** — Post-MVP. As a host, I want hosted identity and payout onboarding so that bank details never enter this app.
  - Provider collects documents and bank numbers.
  - App stores provider account ID and readiness state only.
- **CS-E11-S03 Show full fee and create checkout** — Post-MVP. As a guest, I want to see gift, service fee and total before paying so that the charge is clear.
  - Server calculates approved fee and creates idempotent checkout.
  - Hosted page collects funding credentials.
- **CS-E11-S04 Verify signed payment callbacks** — Post-MVP. As an operator, I want signed webhooks to update payment state so that browser redirects cannot claim a gift was paid.
  - Verify raw payload signature and unique provider event ID.
  - Duplicate and out-of-order delivery tests pass.
- **CS-E11-S05 Keep gift ledger and payout state** — Post-MVP. As a host, I want available and paid-out totals separated so that I understand where money stands.
  - Settled, payout pending and paid out have distinct states.
  - Unsettled funds are never shown as available.
- **CS-E11-S06 Handle refunds and disputes** — Post-MVP. As an operator, I want reversals recorded so that reported balances remain accurate.
  - Refunds and disputes create compensating entries.
  - Guest and host views use provider-backed status.
- **CS-E11-S07 Reconcile provider and app daily** — Post-MVP. As a founder, I want daily exception reporting so that money mismatches are caught promptly.
  - Compare signed provider events and ledger totals.
  - Investigate any unmatched charge or payout before expansion.
- **CS-E11-S08 Retain external route as independent choice** — Post-MVP. As a host, I want approved integrated checkout to coexist safely with external services if supported so that migration is gradual.
  - Clearly distinguish external unverified and integrated provider-verified gifts.
  - Never merge their statuses or fee models.

### CS-E12 Conditional music, GIFs and licensed artwork

Release: Post-MVP. Media enriches cards only when the specific distribution rights and cost are approved

- **CS-E12-S01 Obtain music use rights** — Post-MVP. As a founder, I want a contract for short clips so that card and note playback is permitted.
  - Contract covers composition and recording, sharing, territory, term and in-app playback.
  - Do not assume a 15-second clip is exempt.
- **CS-E12-S02 Offer licensed clip picker** — Post-MVP. As a guest, I want an optional song snippet so that my card evokes a memory.
  - No song is the default; previews play only after a tap.
  - Store catalog ID and rights version, not a copied recording.
- **CS-E12-S03 Recheck rights at playback** — Post-MVP. As a recipient, I want a card to remain viewable if a song expires so that memories are not lost.
  - Authorize each stream by rights, region and expiry.
  - Unavailable clip becomes a silent card with allowed attribution.
- **CS-E12-S04 Control audio in exports** — Post-MVP. As a host, I want book exports to honor music rights so that I can share them safely.
  - Default export contains no recorded audio.
  - Include playback or audio only if export rights are explicitly granted.
- **CS-E12-S05 License art templates and GIFs** — Post-MVP. As a founder, I want approved assets so that generated and selected visuals can be displayed and retained.
  - Record creator, source, grant, territory, derivatives and export rights.
  - Reject unlicensed user-added popular media until a permitted route exists.
- **CS-E12-S06 Keep media optional** — Post-MVP. As a guest, I want a complete static card so that licensing or media failures do not block my note or gift.
  - Manual no-song and no-GIF paths always work.
  - Media errors do not roll back accepted cards or gift intents.

### CS-E13 Advanced AI and personalization

Release: Post-MVP. Assess evidence, vendor terms, cost and risk before scheduling this extension.

- **CS-E13-S01 Edit an existing image with consent** — Post-MVP. As a Cardsake user or operator, I want to edit an existing image with consent so the product can expand when justified.
  - Reference-photo transformations need explicit owner consent, moderation, provenance and deletion.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E13-S02 Learn a private writing voice by opt in** — Post-MVP. As a Cardsake user or operator, I want to learn a private writing voice by opt in so the product can expand when justified.
  - Personal profile is optional, scoped, deletable and never mixed with other accounts.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E13-S03 Compare generated designs before spending** — Post-MVP. As a Cardsake user or operator, I want to compare generated designs before spending so the product can expand when justified.
  - Show cost and output limits before starting image work.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E13-S04 Expand bounded occasion templates** — Post-MVP. As a Cardsake user or operator, I want to expand bounded occasion templates so the product can expand when justified.
  - Templates cover birthdays, graduations, holidays and sympathy with manual fallback.
  - Scope, pricing and release gate are documented before implementation.

### CS-E14 Growth and reminder features

Release: Post-MVP. Assess evidence, vendor terms, cost and risk before scheduling this extension.

- **CS-E14-S01 Let a recipient schedule future occasions** — Post-MVP. As a Cardsake user or operator, I want to let a recipient schedule future occasions so the product can expand when justified.
  - Reminders are opt in with a clear off switch and no contact scraping.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E14-S02 Track guest to host referrals** — Post-MVP. As a Cardsake user or operator, I want to track guest to host referrals so the product can expand when justified.
  - Measure invitations without exposing guest identities to unrelated events.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E14-S03 Offer planner and venue referrals** — Post-MVP. As a Cardsake user or operator, I want to offer planner and venue referrals so the product can expand when justified.
  - Attribute referrals with explicit consent and measurable terms.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E14-S04 Create a private relationship timeline** — Post-MVP. As a Cardsake user or operator, I want to create a private relationship timeline so the product can expand when justified.
  - Only opted-in contacts and occasions appear, with export and deletion.
  - Scope, pricing and release gate are documented before implementation.

### CS-E15 Media and physical keepsakes

Release: Post-MVP. Assess evidence, vendor terms, cost and risk before scheduling this extension.

- **CS-E15-S01 Support consented video memories** — Post-MVP. As a Cardsake user or operator, I want to support consented video memories so the product can expand when justified.
  - Enforce upload size, duration, moderation, storage and retention limits.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E15-S02 Offer a printed event book** — Post-MVP. As a Cardsake user or operator, I want to offer a printed event book so the product can expand when justified.
  - Quote printing, shipping, taxes, returns and proof approval before sale.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E15-S03 Offer reusable design marketplace** — Post-MVP. As a Cardsake user or operator, I want to offer reusable design marketplace so the product can expand when justified.
  - Record commercial template and derivative rights for each asset.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E15-S04 Expand GIF library safely** — Post-MVP. As a Cardsake user or operator, I want to expand gif library safely so the product can expand when justified.
  - Use a licensed API/catalog and label attribution and allowed reuse.
  - Scope, pricing and release gate are documented before implementation.

### CS-E16 New gift rails and markets

Release: Post-MVP. Assess evidence, vendor terms, cost and risk before scheduling this extension.

- **CS-E16-S01 Evaluate pooled group gifts** — Post-MVP. As a Cardsake user or operator, I want to evaluate pooled group gifts so the product can expand when justified.
  - Map custody, fee, refund and dispute duties before collecting principal.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E16-S02 Evaluate international gifts** — Post-MVP. As a Cardsake user or operator, I want to evaluate international gifts so the product can expand when justified.
  - Research country limits, currencies, tax and provider approval before build.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E16-S03 Offer more provider approved external routes** — Post-MVP. As a Cardsake user or operator, I want to offer more provider approved external routes so the product can expand when justified.
  - Add only allowlisted methods with host confirmation and exact guest display.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E16-S04 Add native mobile applications if justified** — Post-MVP. As a Cardsake user or operator, I want to add native mobile applications if justified so the product can expand when justified.
  - Use measured repeat use to justify separate mobile releases.
  - Scope, pricing and release gate are documented before implementation.

### CS-E17 Operations and analytics

Release: Post-MVP. Assess evidence, vendor terms, cost and risk before scheduling this extension.

- **CS-E17-S01 Build consent-safe analytics dashboard** — Post-MVP. As a Cardsake user or operator, I want to build consent-safe analytics dashboard so the product can expand when justified.
  - Track funnel and spend without storing unnecessary message content.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E17-S02 Automate retention and deletion requests** — Post-MVP. As a Cardsake user or operator, I want to automate retention and deletion requests so the product can expand when justified.
  - Respect active event windows and lawful financial retention.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E17-S03 Document incident response and support flows** — Post-MVP. As a Cardsake user or operator, I want to document incident response and support flows so the product can expand when justified.
  - Handle account takeover, wrong-payee reports and provider disputes with owners.
  - Scope, pricing and release gate are documented before implementation.
- **CS-E17-S04 Add scalability and recovery drills** — Post-MVP. As a Cardsake user or operator, I want to add scalability and recovery drills so the product can expand when justified.
  - Load test, restore, queued jobs and independent module health checks.
  - Scope, pricing and release gate are documented before implementation.
