# ADR 0004 Product name and project identifiers

**Status:** Accepted. **Updated:** 13 October 2026. **Owner:** founder.

## Decision

Use **TheDigitalCardBox** as the customer-facing product name. Page titles, visible copy, accessibility labels, logo lettering, contact-draft subjects and current product/reference documents use this spelling. Nonworking sample guest URLs use `thedigitalcardbox.example`. The friendly GitHub board title is **TheDigitalCardBox Development**.

Retain `digitalcardbox-app` for the repository, local folder and npm package, existing Cloudflare Worker names and URLs, `DCB-E##` / `DCB-E##-S##` backlog identifiers, and the `digitalcardbox-backlog` importer marker. These internal identities do not need another migration for the display-name change.

Keep the founder-supplied `support@digitalcardbox.com` and `info@digitalcardbox.com` contact addresses. A brand change does not provision replacement domains or mailboxes.

Update the existing logo's main lettering using the founder's artwork as the edit target. Preserve the original HEIC source. The header and footer use the updated asset, a new brand query string to refresh cached logos, and alternative text with the current name.

## Consequences

Rename the six maintained Word reference documents and update their product-name text while preserving document formatting and diagrams. Historical commits and operational token names retain their original text.

This naming decision changes no payment rules, release scope, runtime or deployment-approval policy. Apply it to the existing feature UI and through a separate branding-only production release so other feature work is not promoted as part of the rename.
