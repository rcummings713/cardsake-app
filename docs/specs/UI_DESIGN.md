# TheDigitalCardBox UI presentation

**Updated:** 13 October 2026. **Scope:** current-branch sample UI, not a production backend decision.

## Reference and palette

The requested reference is [Margot by 17th Avenue](https://demo.17thavenuedesigns.com/margot/), supplied as `IMG_2249.heic`. Use the [official font and color guide](https://support.17thavenuedesigns.com/article/625-margot-color-font-guide) for the shared theme in `public/theme.css`.

| Token | Reference color |
| --- | --- |
| Background | `#F9F3F2` |
| Light pink | `#EADCD9` |
| Medium pink | `#DFCAC4` |
| Dark pink | `#CAA79E` |
| Text | `#222222` |

Use white editorial panels, the supplied company logo centered in the header, three photographic feature cards, rectangular buttons, and a main column with an introductory sidebar. The photographs are independently sourced; the layout carries TheDigitalCardBox content and actions. Use `#6E5F5C` for accessible muted text instead of the pale decorative colors.

## Company logo

The founder-supplied `IMG_8033.heic` remains the original logo source. The current `public/images/company-logo.png` is an AI-edited derivative with the main lettering changed to **TheDigitalCardBox**, retaining the envelope-and-box design, palette and embedded tagline. Show the full logo and embedded “Elevating events & memories” tagline once in the shared header, and a smaller version once in the footer, on all React pages and the full clickable demo. Both link home and have meaningful alternative text. Use a CSS viewport to exclude the charcoal screenshot frame and excess padding, preserving the bitmap's proportions and complete current lettering. A simplified envelope-and-box SVG serves as the favicon.

Keep page bodies, customer cards, messages, forms, and book entries free of additional company logo placements. The supplied logo supersedes the prior script text wordmark; the Margot-inspired colors and fonts remain in the page content.

## Typography and assets

- **Forum:** headings and card titles.
- **Montserrat:** navigation, buttons, and small labels.
- **Hanken Grotesk:** body copy.
- **Miss Noteworthy:** the reference's commercial script font for decorative accents. A licensed webfont has not been supplied. **La Belle Aurore** is the temporary, explicitly documented fallback. Add the licensed font declaration in `public/brand-font.css` to replace those accents. The company logo uses the lettering in the supplied artwork.

The four supplied open-license fonts are hosted in `public/fonts/` with their OFL notices. Font loading and photographs do not require third-party requests at runtime. See `public/images/README.md` for photo sources.

## Pages and behavior

| URL | Purpose |
| --- | --- |
| `/` | Introduce the experience; give guests and hosts clear entry points. |
| `/guest` | Retain manual note editing, three fixed draft choices, optional service selection, exact sample identifiers, and recipient acknowledgment. |
| `/host` | Explain the host workflow and open the full host setup demo. |
| `/about` | Explain the product purpose, optional gifts, and planned private CardVault. |
| `/contact` | Show Support and General Info email links and prepare a reviewable message draft. |
| `/prototype/index.html` | Preserve the complete clickable concept with the shared visual theme. `#setup` opens host setup directly. |

React page links support direct entry, refresh, browser Back/Forward, and opening links in another tab. On in-app navigation, move focus to the main content. Include a keyboard skip link, labeled form controls, visible focus, reduced-motion support, and responsive layouts.

The full demo's host Page type dropdown includes the additional [host event choices](PRODUCT.md#host-event-choices). Preserve the three original choices. Additional event labels appear in the setup summary and guest landing, and use the existing non-wedding dated lifecycle.

The About page introduces the customer-facing vision: meaningful e-cards, simpler participation by link or QR, optional external cash gifting, less paper to manage, and a planned private CardVault. Digital invitations are presented as part of the broader vision, without expanding the October acceptance criteria. Avoid promises of permanent storage, guaranteed security, integrated money transfers, or an available native mobile app. The page leads visitors to the host experience and invites them to discuss their celebration.

Contact displays the founder-supplied addresses `support@digitalcardbox.com` (Support Email) and `info@digitalcardbox.com` (General Info), both as email links. Remove placeholder contact addresses and obsolete single-address configuration. The form validates required fields and prepares a local draft: support and guest-experience topics go to Support; general questions, hosting, and feedback go to General Info. Show the selected recipient before preparation and in the draft. Visitors can copy the draft or open its encoded `mailto:` link in their email app. Changing any field clears the draft. The form does not deliver or persist messages and must not claim a message was sent.

## Existing boundaries

The demo still has no authentication, server authorization, live AI, private storage, or payment processing. Preserve independent notes and gifts, exact host-supplied identifiers, acknowledgment reset on changing services, and honest unconfirmed gift wording. Keep the full concept's destination version, per-service pause, event-window, consent, card-art, and book-preview behavior. Production requirements remain in `PRODUCT.md`, `SECURITY_PAYMENT.md`, and `MVP_ACCEPTANCE.md`; ADR 0001 stays open.

No dedicated redesign/About/Contact story was found. Related checks are tracked by GitHub stories #3 (demo boundaries) and #5 (phone review), under epic #1. Automated browser checks support the local presentation review; they do not substitute for the production release gates or actual phone review.
