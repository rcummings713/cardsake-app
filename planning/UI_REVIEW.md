# Application UI review

**Branch:** `feature/mvp_iteration_1`. **Stage:** frontend design review.
**Owner closes issues:** do not close issues or mark board items Done.

Start at `/`, choose an occasion and continue without signing in, or use
`/workspace` to open the seeded fictional card boxes. From the wedding card box,
use Invite & share to open the guest journey. Account & preferences provides the
administrator review entry. No backend, identity or payment provider is connected.

## Owner review sequence

1. Home, occasion-specific creation and account-choice screen.
2. Create/edit an occasion, publish its local invitation and inspect the QR.
3. Open the host's guest preview, choose a card, write a note and add photo/GIF.
4. Review consent and send the card locally, with or without an independent gift.
5. Compare full name, payment-app name, reference and linked card in Gift matching.
6. Review receipt manually; confirm only after checking a payment account in the
   future connected application. The current UI makes no transfer.
7. Curate cards and compare The Editorial / The Collage event books. Try readable
   text, print, hidden entries and host-only consent.
8. Use administrator switches, inspect unavailable states, and check small-screen,
   keyboard and reduced-motion behavior. Reset via Preferences when needed.

## Design decisions still open

- Default book direction and final cover/spread art direction.
- Sign-in provider priority, managed identity provider and final account screen.
- Final production policy copy and retention promises; current notice describes
  only this device-based review build.
- Whether original GIF stickers suffice or a licensed searchable provider is
  needed; provider retention/export rights require review.
- Approved transaction-data access per payment provider. Personal payment history
  is not assumed accessible; ambiguous names cannot automatically settle a gift.
- Final purchased-book delivery and checkout; no purchase is connected here.

## Work tracking

DCB-E19 tracks UI foundation/review-specific work. Existing DCB-E03, E04, E06,
E07 and E08 stories retain their domain/backend acceptance criteria; UI progress
does not finish them. DCB-E02-S06, E12-S05, E15-S04 and E17-S01 already existed in
the local backlog and are published rather than recreated. DCB-E06-S11 adds the
provider-data feasibility gap, and DCB-E17-S05 adds server-enforced feature flags.
GitHub mapping and verification evidence are recorded after the implementation
checks. No new work silently changes the October capacity commitment.

## GitHub implementation record

The [Customer UI and owner design review epic #84](https://github.com/rcummings713/digitalcardbox-app/issues/84)
and stories [#85](https://github.com/rcummings713/digitalcardbox-app/issues/85),
[#86](https://github.com/rcummings713/digitalcardbox-app/issues/86),
[#87](https://github.com/rcummings713/digitalcardbox-app/issues/87) and
[#88](https://github.com/rcummings713/digitalcardbox-app/issues/88) are In Progress.
Related existing event/card/gift/book/accessibility stories also record their UI
progress without removing backend acceptance criteria. No issues were closed.

| Work | Issue | Status |
| --- | --- | --- |
| DCB-E02-S06 | [#72](https://github.com/rcummings713/digitalcardbox-app/issues/72) | Todo |
| DCB-E05-S01 | [#30](https://github.com/rcummings713/digitalcardbox-app/issues/30) | In Progress |
| DCB-E05-S02 | [#31](https://github.com/rcummings713/digitalcardbox-app/issues/31) | In Progress |
| DCB-E05-S04 | [#33](https://github.com/rcummings713/digitalcardbox-app/issues/33) | In Progress |
| DCB-E05-S06 | [#73](https://github.com/rcummings713/digitalcardbox-app/issues/73) | In Progress |
| DCB-E06-S11 | [#74](https://github.com/rcummings713/digitalcardbox-app/issues/74) | Todo |
| DCB-E07-S05 | [#75](https://github.com/rcummings713/digitalcardbox-app/issues/75) | In Progress |
| DCB-E12-S05 | [#77](https://github.com/rcummings713/digitalcardbox-app/issues/77) | In Progress |
| DCB-E12-S06 | [#78](https://github.com/rcummings713/digitalcardbox-app/issues/78) | In Progress |
| DCB-E15-S04 | [#80](https://github.com/rcummings713/digitalcardbox-app/issues/80) | In Progress |
| DCB-E17-S01 | [#82](https://github.com/rcummings713/digitalcardbox-app/issues/82) | In Progress |
| DCB-E17-S05 | [#83](https://github.com/rcummings713/digitalcardbox-app/issues/83) | Todo |

## Verification

- Production build, planning consistency and six deployment-routing tests pass.
- Twelve browser journeys pass, including real photo validation, local drafts,
  guest-link states, consent and moderation filtering, editable writing choices,
  gift matching/receipt rules, feature switches and keyboard/reduced motion.
- Axe checks report no violations for the selected WCAG 2.2 AA tags on the tested
  public/application routes and open guided-writing state.
- Layout checks cover 320, 375, 768 and 1280 CSS pixels; desktop/mobile screenshots
  were inspected. Real device, screen-reader and owner art-direction review remain.
- CI repeats the browser checks before publishing its isolated DEV preview.

These checks validate the UI and fictional local adapter. They do not validate
production authentication, server access control, money movement or ADA compliance.
