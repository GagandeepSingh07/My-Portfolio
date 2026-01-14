# Step-by-Step Migration Guide

This guide will help you migrate from the current file structure to the improved one **without breaking your site**.

---

## 🎯 Migration Strategy: Safe & Gradual

We'll use a **parallel approach** - keep old files working while building new structure, then switch over all at once.

---

## Phase 1: Preparation (5 minutes)

### Step 1: Backup Everything
```bash
# Create a complete backup
cd "D:\Softwares\Installed\GithubDesktop\Repos"
cp -r My-Portfolio My-Portfolio-backup-$(date +%Y%m%d)
```

Or manually:
1. Right-click `My-Portfolio` folder
2. Copy → Paste
3. Rename to `My-Portfolio-backup-20260111`

### Step 2: Create Git Commit (If using Git)
```bash
cd My-Portfolio
git add .
git commit -m "Pre-migration checkpoint - working version"
git branch migration-restructure
git checkout migration-restructure
```

---

## Phase 2: Create New Structure (10 minutes)

### Step 1: Create All Directories

The directories are already created. Verify them:
```
✓ src/
✓ src/css/
✓ src/js/
✓ src/images/
✓ src/images/icons/
✓ src/images/profile/
✓ src/images/portfolio/
✓ public/
✓ docs/
```

### Step 2: Create Subdirectories for Portfolio

Create these manually or via command:

```bash
# Portfolio subdirectories
mkdir -p "src/images/portfolio/social-media"
mkdir -p "src/images/portfolio/3d-work"
mkdir -p "src/images/portfolio/logos"
mkdir -p "src/images/portfolio/reels"
mkdir -p "src/images/portfolio/certificates"
mkdir -p "src/images/portfolio/posts"
mkdir -p "src/images/portfolio/videos"

# Icons subdirectories
mkdir -p "src/images/icons/software"
mkdir -p "src/images/icons/ui"

# JS components
mkdir -p "src/js/components"
mkdir -p "src/js/utils"
```

---

## Phase 3: Reorganize CSS (20 minutes)

### Step 1: Create global.css

**File:** `src/css/global.css`

Copy the CSS variables section and reset from `assets/globleStyle.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Roboto:wght@400;700&display=swap');

:root {
  /* Color Palette */
  --color-primary: #0f1016;
  --text-color: #f0f0f0;
  --accent-color: #89D1D1;
  --accent-color-2: #908FDB;
  --bg-color: #030C44;
  --card-bg-color: #1C1853;
  --heading-font: 'Outfit', sans-serif;
  --body-text-font: 'Roboto', sans-serif;

  /* Typography */
  --body-text-font-family: "Roboto", Helvetica;
  --body-text-font-weight: 400;
  --body-text-font-size: 16px;
  --body-text-letter-spacing: 0px;
  --body-text-line-height: 27.5px;
  --body-text-font-style: normal;
  
  --main-heading-font-family: "Outfit", Helvetica;
  --main-heading-font-weight: 700;
  --main-heading-font-size: 65px;
  --main-heading-letter-spacing: 0px;
  --main-heading-line-height: 100%;
  --main-heading-font-style: normal;
  
  --sub-heading-font-family: "Outfit", Helvetica;
  --sub-heading-font-weight: 700;
  --sub-heading-font-size: 20px;
  --sub-heading-letter-spacing: 2.6px;
  --sub-heading-line-height: 27.5px;
  --sub-heading-font-style: normal;
  
  --h2-font-family: "Outfit", Helvetica;
  --h2-font-weight: 700;
  --h2-font-size: 58px;
  --h2-letter-spacing: 0px;
  --h2-line-height: 100%;
  --h2-font-style: normal;
}

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 12pt;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
}

body {
  background-color: var(--bg-color);
}

/* Prevent context menu (right-click) */
body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

### Step 2: Create components.css

**File:** `src/css/components.css`

Extract reusable components:

```css
/* ============================================
   COMPONENTS - Reusable UI Elements
   ============================================ */

/* --- Navigation --- */
nav {
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: var(--heading-font);
  z-index: 1000;
}

.links-container {
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  padding-right: 10%;
  z-index: 1001;
}

nav {
  font-weight: bold;
}

nav a {
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  cursor: pointer;
  transition: color 0.3s ease;
}

nav a:hover {
  color: var(--accent-color);
}

nav .home-link,
nav .work-page-link {
  margin-right: auto;
}

nav svg {
  fill: var(--text-color);
}

#sidebar-action {
  display: none;
}

.open-sidebar-button,
.close-sidebar-button {
  display: none;
  z-index: 1002;
}

#overlay {
  z-index: 1000;
}

/* --- Buttons --- */
.btn-primary {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 100%;
  background: var(--accent-color-2);
  border: 2px solid var(--accent-color-2);
  border-radius: 50px;
  font-size: 12px;
  color: var(--bg-color);
  text-decoration: none;
  font-weight: 550;
  letter-spacing: 1px;
  font-family: var(--heading-font);
  cursor: pointer;
  transition: 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
}

.btn-secondary {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 100%;
  border: 2px solid var(--accent-color);
  background-color: var(--bg-color);
  border-radius: 50px;
  font-size: 12px;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 550;
  letter-spacing: 1px;
  font-family: var(--heading-font);
  cursor: pointer;
  transition: 0.3s ease;
}

.btn-secondary:hover {
  color: var(--accent-color);
  opacity: 0.7;
}

/* --- Cards --- */
.card {
  width: 325px;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  transition: transform 0.15s ease-in-out;
  padding-bottom: 1rem;
}

.card:hover {
  transform: scale(1.05);
}

.card-bg-holder {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  transform: translateY(-8.4rem);
  z-index: -3;
}

.card-bg {
  background-color: var(--card-bg-color);
  opacity: 0.65;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.15s ease-in-out;
}

/* Portfolio Cards */
.portfolio-card {
  display: inline-block;
  width: 100%;
  background-color: var(--card-bg-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  margin-bottom: 20px;
  break-inside: avoid;
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.portfolio-card:focus {
  outline: 3px solid rgba(137, 143, 219, 0.25);
  outline-offset: 4px;
  transform: translateY(-3px);
}

/* --- Footer --- */
.footer {
  background-color: #1c185370;
  padding: 4rem 2rem 1rem 2rem;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  color: var(--text-color);
  font-family: var(--body-text-font-family);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.footer-section:hover h3::after {
  width: 75px;
  background-color: var(--accent-color-2);
}

/* --- Email Form --- */
.email-container {
  z-index: 10;
  width: 100%;
  height: auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.email-container p {
  display: flex;
  margin-left: 2rem;
  color: var(--text-color);
  font-size: 20px;
  font-weight: 500;
  font-family: var(--sub-heading-font-family);
  letter-spacing: var(--sub-heading-letter-spacing);
  transform: translateY(5px);
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

.email-container p:hover {
  opacity: 0.7;
}

.emailButton {
  position: relative;
  display: flex;
  gap: 4px;
  margin-right: 2rem;
  width: auto;
}

.email-container input {
  height: 40px;
  border-radius: 50px;
  background-color: #1c185370;
  width: 20rem;
  outline: none;
  border: none;
  color: var(--text-color);
  padding-left: 30px;
}

.email-container input::placeholder {
  color: #ffffff71;
  padding-bottom: 0.3rem;
}

.email-container form button {
  position: absolute;
  top: 4.5px;
  right: 6.5px;
  background: var(--accent-color-2);
  font-family: var(--sub-heading-font-family);
  font-weight: var(--sub-heading-font-weight);
  color: var(--bg-color);
  font-size: 12px;
  letter-spacing: 1px;
  outline: none;
  border: none;
  padding: 8px 26px;
  border-radius: 50px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

.email-container form button:hover {
  opacity: 0.7;
}

/* --- Modal --- */
.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transform: scale(1.05);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
}

.modal.show {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

.modal img {
  max-width: 90%;
  max-height: 80%;
  cursor: zoom-out;
  pointer-events: auto;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 30px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

.close-btn:hover {
  color: var(--accent-color);
}

/* --- Scroll to Top --- */
.scrolltotop {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: transparent;
  transition: transform 0.3s ease;
}

.scrolltotopsvg {
  display: none;
}

.scrolltotop:hover {
  animation: popup 0.8s ease-out;
}

.scrolltotop:hover p {
  color: var(--accent-color);
}

@keyframes popup {
  0%, 100% { transform: translateY(0px); }
  25%, 75% { transform: translateY(-6px); }
  50% { transform: translateY(-2px); }
}

.scrolltotop .scroll {
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  font-size: 15px;
}

/* --- Rectangle Divider --- */
.rectangle {
  width: 100%;
  height: 8px;
  background: linear-gradient(140deg, rgba(58, 58, 190, 1) 21%, rgba(137, 209, 209, 1) 88%);
}

/* --- Utility Classes --- */
.fade-in {
  animation: fadeIn 260ms ease forwards;
}

.fade-out {
  animation: fadeOut 260ms ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fadeOut {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
}

.is-hidden {
  pointer-events: none;
  display: none !important;
}
```

### Step 3: Keep Old Files (Don't Delete Yet!)

Leave `assets/globleStyle.css` and `assets/style.css` intact for now.

---

## Phase 4: Move Images (15 minutes)

### Batch 1: Profile Photos

**Copy from → to:**
```
assets/Images/gagandeep-singh-hero-section-photo-1.png
  → src/images/profile/hero-photo.png

assets/Images/gagandeep-singh-profile-photo-3.png
  → src/images/profile/about-photo.png

assets/Images/gagandeep-singh-letter-box-photo-1.png
  → src/images/profile/letterbox-photo.png
```

### Batch 2: Software Icons

**Copy from → to:**
```
assets/icons/Photoshop.png
  → src/images/icons/software/photoshop.png

assets/icons/After effects.png
  → src/images/icons/software/after-effects.png

assets/icons/premiere pro.png
  → src/images/icons/software/premiere-pro.png

(Continue for all icons...)
```

### Batch 3: Portfolio Work

**Social Media Posts:**
```
assets-2/my-work/posts/1.jpg
  → src/images/portfolio/social-media/carryon-faucets-1.jpg

assets-2/my-work/posts/2.jpg
  → src/images/portfolio/social-media/faher-facewash.jpg

(Continue for all...)
```

**3D Work:**
```
assets-2/my-work/3d/3d 1.png
  → src/images/portfolio/3d-work/study-table.png

assets-2/my-work/3d/3d 2.png
  → src/images/portfolio/3d-work/procedural-planet.png

(Continue...)
```

**DO NOT DELETE originals yet!** Just copy.

---

## Phase 5: Update HTML (30 minutes)

### Update index.html

**Find and replace CSS links:**

```html
<!-- OLD -->
<link rel="stylesheet" href="assets/globleStyle.css">
<link rel="stylesheet" href="assets/style.css">

<!-- NEW -->
<link rel="stylesheet" href="src/css/global.css">
<link rel="stylesheet" href="src/css/components.css">
<link rel="stylesheet" href="src/css/home.css">
<link rel="stylesheet" href="src/css/responsive.css">
```

**Find and replace JS:**
```html
<!-- OLD -->
<script defer src="assets/script.js"></script>

<!-- NEW -->
<script defer src="src/js/main.js"></script>
<script defer src="src/js/home.js"></script>
```

**Update image paths (use Find & Replace):**

Find: `assets/Images/gagandeep-singh-hero-section-photo-1.png`  
Replace: `src/images/profile/hero-photo.png`

Find: `assets/Images/gagandeep-singh-profile-photo-3.png`  
Replace: `src/images/profile/about-photo.png`

Find: `assets/icons/`  
Replace: `src/images/icons/software/`

**Important:** Make icon names lowercase:
- `Photoshop.png` → `photoshop.png`
- `After effects.png` → `after-effects.png`

### Update work.html (formerly my-work.html)

Similar process - update all paths.

---

## Phase 6: Test Locally (10 minutes)

### Step 1: Open index.html in browser

Check for:
- ✅ Styles loading correctly
- ✅ Images displaying
- ✅ Navigation working
- ✅ No console errors

### Step 2: Open work.html in browser

Check for:
- ✅ Portfolio images showing
- ✅ Filters working
- ✅ Modal functioning
- ✅ All links working

### Step 3: Check All Pages on Mobile View

Use browser DevTools (F12) to test responsive design.

---

## Phase 7: Create Archive (5 minutes)

### Only After Everything Works!

```bash
# Create archive folder
mkdir archive

# Move old folders
mv assets archive/
mv assets-2 archive/
mv "Other files" archive/
```

Or manually drag:
- `assets/` → `archive/assets/`
- `assets-2/` → `archive/assets-2/`
- `Other files/` → `archive/Other files/`

---

## Phase 8: Deploy (5 minutes)

### If using Vercel:

```bash
vercel --prod
```

### Or push to GitHub:

```bash
git add .
git commit -m "Restructured file organization - v2.0"
git push origin main
```

Vercel will auto-deploy if connected.

---

## Rollback Plan (If Something Breaks)

### Quick Rollback:
```bash
# Restore from backup
cd ..
rm -rf My-Portfolio
mv My-Portfolio-backup-20260111 My-Portfolio
```

### Git Rollback:
```bash
git checkout main
git branch -D migration-restructure
```

---

## Post-Migration Checklist

- [ ] All pages load without errors
- [ ] All images display correctly
- [ ] Navigation works on all pages
- [ ] Portfolio filter functions properly
- [ ] Modal image viewer works
- [ ] Email form submits correctly
- [ ] Mobile responsive design intact
- [ ] All external links work
- [ ] Resume download link works
- [ ] Social media links functional
- [ ] No 404 errors in console
- [ ] Lighthouse score maintained/improved
- [ ] Site deployed successfully

---

## Timeline Summary

- **Preparation:** 5 min
- **Create Structure:** 10 min
- **Reorganize CSS:** 20 min
- **Move Images:** 15 min
- **Update HTML:** 30 min
- **Test:** 10 min
- **Archive:** 5 min
- **Deploy:** 5 min

**Total:** ~100 minutes (1h 40min)

---

## Next Steps

After successful migration:

1. Update deployment documentation
2. Create changelog entry
3. Delete archive folder (after 30 days of stable operation)
4. Consider adding build process (Vite/Webpack)
5. Optimize images (WebP conversion)
6. Add PWA features
7. Implement CSS preprocessing

---

**Good luck with your migration! 🚀**

If you run into issues, refer back to this guide or restore from backup.
