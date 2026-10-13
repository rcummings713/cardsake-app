# TheDigitalCardBox October 2026 delivery plan

The private MVP target is **Saturday, October 31, 2026**, subject to replanning capacity. The backlog now assigns **180 focused developer hours** to 54 October stories: the previous 156 hours plus 24 explicit database-foundation hours. The first week carries 72 hours and each remaining week 54; this exceeds the previous working capacity and must be reviewed before committing to the date. AI-assisted drafts do not remove integration and security testing. The fixed development payment remains **$500 total**, independent of engineering hours.

| Window | Scheduled hours | Output and check |
| --- | ---: | --- |
| Oct 12–18 | 72 | Stack/database spike by Oct 14, migrations/scoped tables by Oct 15, transaction/outbox foundation by Oct 16; then host identity, event ownership, dates, link and QR. Database dependencies precede production features. |
| Oct 19–25 | 54 | Lifecycle boundaries, manual card/note/photo, editable AI choices and fallback, host dashboard and basic book; verify consent and media controls. |
| Oct 26–31 | 54 | Confirmed multi-service destinations, guest choice and acknowledgment, external handoff, private export and release regression. |
| Nov and later | Separate | Two supervised occasions, optional generated backgrounds, premium sale checkout, integrated funds only after provider approval, and licensed creative features only after rights. |

The historical Word ranges of 114–157 October hours and 126–192 full-pilot hours predate the explicit database breakdown. The current story-level October baseline is **180 hours**; adding the previously separate 12–35 hours of supervised observation/image experiments yields a provisional **192–215 hours** for the broader pilot, pending reestimation of overlaps. Do not add the old aggregate database allowance a second time. If capacity cannot cover the new prerequisites, move non-safety scope or the date after founder review. Never cut authorization, destination/version checks, lifecycle enforcement, persistence or honest payment language.

## Critical path

1. **Oct 14–16 persistence foundation:** DCB-E18-S01/S02/S03 validate PostgreSQL in the chosen runtime, install canonical module tables and provide reliable transaction/outbox primitives. Record measured runtime/provider/identity choices in ADR 0001; ADR 0005 fixes the data design. Sensitive-storage work DCB-E08-S03 moves from Oct 13 to Oct 16 to follow schema installation.
2. **Oct 18 event link:** authenticated host creates an event; public link and QR resolve to the same server checked page.
3. **Oct 25 content:** manual and AI-assisted editable cards work, photo is bounded and private, dashboard reads only host-owned entries.
4. **Oct 29 external routes:** confirm multiple service destinations and reject stale versions and disabled routes.
5. **Oct 30–31 release gate:** phones, accessibility, wrong-payee cases, cross-event access, closed-event writes, backup, AI fallback and all P0 issues. Open only a private MVP if all gates pass.

The definitive story-level dates, estimates and acceptance criteria are in `backlog.json` and `backlog.md`. Use GitHub milestone **October 2026 private MVP** and board filters `label:release:october` or `label:release:post-mvp`.
