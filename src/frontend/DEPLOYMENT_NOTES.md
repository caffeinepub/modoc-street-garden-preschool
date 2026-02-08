# Frontend Deployment Verification Checklist

## Pre-Deployment Verification

### Routes and Navigation
- [x] Little Sprouts route (`/little-sprouts`) registered in App.tsx
- [x] Little Sprouts navigation link added to TopNav.tsx
- [x] All routes render without console/router errors

### Home Page Little Sprouts Section
- [x] Section is compact (reduced vertical footprint)
- [x] Essential details visible (age, date, time, cost, capacity)
- [x] Clear link/button to full Little Sprouts page
- [x] Decorative elements integrated:
  - ls-botanical-border.dim_1800x600.png (top border)
  - ls-grass-strip.dim_1800x220.png (bottom grass)
  - ls-earthworm.dim_256x256.png (corner accent)
- [x] Decorations are subtle (20% opacity) and do not reduce readability
- [x] Background elements use backdrop-blur for content clarity

### Flyer Image
- [x] Flyer reference updated to `/assets/gclittle-sprouts.dim_819x1024.png`
- [x] Flyer loads on Home page
- [x] Flyer loads on Little Sprouts page
- [x] No broken image links

### Parent Handbook Download
- [x] Download link points to `/Parent_Handbook_Modoc_Street_Garden_Preschool.pdf`
- [x] Frontend includes graceful unavailable state if PDF is missing
- [x] No blank page navigation when PDF is missing

## Deployment Contingency

If initial deployment fails with a generic configuration error:
1. Regenerate full project code
2. Redeploy with regenerated code
3. Record success/failure outcome

## Post-Deployment Verification

- [ ] Navigate to `/little-sprouts` and verify page renders correctly
- [ ] Verify Little Sprouts link in top navigation works
- [ ] Verify Home page Little Sprouts section is compact and decorated
- [ ] Verify flyer image loads on both Home and Little Sprouts pages
- [ ] Verify Parent Handbook download button behavior (download or graceful error)
- [ ] Test on mobile and desktop viewports
- [ ] Verify no console errors in browser developer tools
