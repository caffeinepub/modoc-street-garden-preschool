# Specification

## Summary
**Goal:** Remove child-capacity wording from Program Details and add new Oregon flower decorative assets to the site.

**Planned changes:**
- Remove any “up to 8 kids” / “Limited to 8 children” capacity line from the Program Details section on the Little Sprouts page.
- Remove the “Capacity: Limited to 8 children” line from the Home page Little Sprouts details card without changing other Program Details fields.
- Add new minimal Oregon flower illustration PNG assets (transparent background) under `frontend/public/assets/generated` using the specified filenames.
- Render the new flower assets as subtle, non-interactive, aria-hidden decorative elements in an existing decorative UI area (kept behind content, low-opacity, pointer-events disabled).

**User-visible outcome:** The site no longer displays a specific child-capacity limit in Program Details, and additional Oregon-flower decorations appear subtly in the background without affecting readability.
