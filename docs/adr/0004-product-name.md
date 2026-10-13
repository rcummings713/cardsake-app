# ADR 0004 Product name and project identifiers

**Status:** Accepted. **Decision date:** 13 October 2026. **Owner:** founder.

## Decision

Use **DigitalCardBox** as the product name in the application, specifications, reference documents and GitHub project. Use `digitalcardbox-app` for the repository, local folder and npm package, and `digitalcardbox.example` for nonworking sample URLs. The GitHub board is **DigitalCardBox Development**.

Rename the existing static Cloudflare demo worker to `digitalcardbox-app` in place. Its sample URL is `https://digitalcardbox-app.rcummings71300.workers.dev`. Keep its worker ID and deployed version intact during the rename. The checked-in Wrangler configuration serves built UI assets and enables branch previews; this does not select the production backend.

Use `DCB-E##` and `DCB-E##-S##` for epic and story identifiers. Existing GitHub issue numbers, parent relationships, deadlines, estimates and acceptance criteria remain intact. The importer's stable HTML marker is `digitalcardbox-backlog`; existing issue markers migrate together with the local backlog to prevent duplicate imports.

## Consequences

Rename all six maintained Word references while preserving their formatting and diagrams. Historical Git commits keep their original text. This naming decision changes no product behavior, payment rules, release scope or production stack decision.
