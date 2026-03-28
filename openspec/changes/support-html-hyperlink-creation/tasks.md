## 1. Parsing and data flow

- [ ] 1.1 Identify the text parsing/render path and add markdown link tokenization for `[label](url)` segments.
- [ ] 1.2 Add plain-text fallback handling for malformed or incomplete markdown link patterns.
- [ ] 1.3 Expose parsed link segments in the text rendering pipeline as derived runtime data (no schema migration).

## 2. Rendering and interaction behavior

- [ ] 2.1 Render recognized link segments with interactive visual styling while preserving non-link typography/layout.
- [ ] 2.2 Implement hyperlink activation flow that opens links in a new tab only from explicit open-link interactions.
- [ ] 2.3 Ensure link-containing elements still support normal selection, drag, and text-editing interactions without unintended navigation.

## 3. Security validation

- [ ] 3.1 Add centralized URL validation/sanitization with allowlisted schemes for link activation.
- [ ] 3.2 Block unsafe schemes (e.g., `javascript:`) and ensure blocked links do not trigger tab opening.

## 4. Tests and documentation

- [ ] 4.1 Add tests for valid link parsing, malformed fallback behavior, and styled rendering of hyperlink segments.
- [ ] 4.2 Add tests for safe URL opening, unsafe URL blocking, and editing-mode non-navigation behavior.
- [ ] 4.3 Update user-facing docs to describe supported markdown link syntax and any interaction caveats.
