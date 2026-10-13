# TheDigitalCardBox October 2026 delivery plan

The private MVP target is **Saturday, October 31, 2026**. The issue backlog assigns **156 focused developer hours** to 51 October stories, roughly 52 hours per week over the three weeks starting Monday, October 12. This is aggressive for one developer; AI-assisted drafts do not remove integration and security testing. The fixed development payment remains **$500 total**, independent of engineering hours.

| Window | Scheduled hours | Output and check |
| --- | ---: | --- |
| Oct 12–18 | 48 | Repo, local and disposable preview, stack spike by Oct 14, host identity, event ownership, dates, link and QR; test basic access. |
| Oct 19–25 | 54 | Lifecycle boundaries, manual card/note/photo, editable AI choices and fallback, host dashboard and basic book; verify consent and media controls. |
| Oct 26–31 | 54 | Confirmed multi-service destinations, guest choice and acknowledgment, external handoff, private export and release regression. |
| Nov and later | Separate | Two supervised occasions, optional generated backgrounds, premium sale checkout, integrated funds only after provider approval, and licensed creative features only after rights. |

The broad external pilot estimate in the Word timeline remains **126–192 hours**; it includes the October slice and later supervised observation and optional image work. The 156-hour issue estimate is near the top of the October range. If actual capacity is under about 52 focused hours each week, move a non-safety feature or the release date after reviewing with the founder. Do not cut authorization, destination/version checks, lifecycle enforcement or honest payment language.

## Critical path

1. **Oct 14 stack decision:** a protected host request and deployed preview must run. Record the chosen server framework and identity provider in ADR 0001.
2. **Oct 18 event link:** authenticated host creates an event; public link and QR resolve to the same server checked page.
3. **Oct 25 content:** manual and AI-assisted editable cards work, photo is bounded and private, dashboard reads only host-owned entries.
4. **Oct 29 external routes:** confirm multiple service destinations and reject stale versions and disabled routes.
5. **Oct 30–31 release gate:** phones, accessibility, wrong-payee cases, cross-event access, closed-event writes, backup, AI fallback and all P0 issues. Open only a private MVP if all gates pass.

The definitive story-level dates, estimates and acceptance criteria are in `backlog.json` and `backlog.md`. Use GitHub milestone **October 2026 private MVP** and board filters `label:release:october` or `label:release:post-mvp`.
