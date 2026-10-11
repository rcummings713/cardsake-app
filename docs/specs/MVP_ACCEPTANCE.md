# October private MVP acceptance

**Target:** Saturday, 31 October 2026. The date is a planning target. A failed gate moves the private release; do not remove a safety check to meet the date.

| Gate | Evidence to collect before release |
| --- | --- |
| Host access | Unauthenticated user cannot create/edit an event or see another host's CardVault. Recent authentication required for destination changes and export. |
| Event lifecycle | Test six-month opening, event timezone, day-90 close, wedding gift-only through month 12, undated close, revocation and closed landing for both URL and QR. Writes are rejected by the server, not just hidden in the UI. |
| Manual content | Note and editable card work with AI disabled; one bounded photo uses private storage, consent is persisted and moderation can hide an entry. |
| Guided AI | Three editable choices avoid invented memories; request caps, moderation, input limits and fallback work. No key appears in the browser bundle. |
| Host destination | Each enabled Cash App, Venmo or Zelle route was entered twice and confirmed. Editing one route pauses only that route, alerts host and increments version. |
| Guest gift | Guest sees full selected identifier and recipient; changing service resets acknowledgment; stale/disabled routes are rejected atomically; outbound route is allowlisted; no app claim of successful external payment. |
| Private book | Host sees only own consented entries and can export after closure. A gift is never required to submit a note. |
| Reliability and usability | Phone and keyboard flows work, fallback errors are clear, deployment uses HTTPS, backup/restore path is tested, and serious bugs are closed. |

## Release decision

On October 30–31, walk through the entire guest and host journey on at least two phones. Ask the host to compare every published destination to their account inside each actual external service. Run wrong-payee, changed-route, service-switch, closed-event and cross-account tests. Record results and issue links. If all gates pass, allow a **small private MVP**. Run two supervised real occasions afterward before expanding access.
