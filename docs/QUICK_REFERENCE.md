# Quick Reference - Portfolio File Structure

## 📍 Where Does Everything Go?

### Need to add a new stylesheet?
→ `src/css/[purpose].css`

Examples:
- Global variables → `src/css/global.css`
- Reusable components → `src/css/components.css`
- Page-specific → `src/css/about.css`
- Media queries → `src/css/responsive.css`

---

### Need to add JavaScript?
→ `src/js/`

Examples:
- Shared functions → `src/js/main.js`
- Page-specific → `src/js/contact.js`
- Reusable module → `src/js/components/slider.js`
- Helper functions → `src/js/utils/helpers.js`

---

### Need to add an image?

**Personal Photo?**
→ `src/images/profile/[descriptive-name].png`

**Software Icon?**
→ `src/images/icons/software/[tool-name].png`

**UI Icon?**
→ `src/images/icons/ui/[icon-name].svg`

**Portfolio Work?**
→ `src/images/portfolio/[category]/[project-name].[ext]`

Categories:
- `social-media/` - Posts, ads
- `3d-work/` - Renders, models
- `logos/` - Logo designs
- `reels/` - Video thumbnails
- `certificates/` - Achievements
- `videos/` - Video thumbnails

---

### Need to add a static file?
→ `public/`

Examples:
- Favicon → `public/favicon.ico`
- Robots → `public/robots.txt`
- Sitemap → `public/sitemap.xml`
- Manifest → `public/manifest.json`

---

### Need to add documentation?
→ `docs/`

Examples:
- Setup guide → `docs/SETUP.md`
- API docs → `docs/API.md`
- Changelog → `docs/CHANGELOG.md`

---

## 📋 File Naming Cheat Sheet

### ✅ DO:
```
hero-photo.png          ✓ Lowercase
after-effects.png       ✓ Hyphenated
study-table.png         ✓ Descriptive
global.css              ✓ Purpose-clear
navigation.js           ✓ Component name
```

### ❌ DON'T:
```
Hero Photo.png          ✗ Spaces
After_Effects.png       ✗ Underscores + capitals
IMG_001.png             ✗ Generic
style2.css              ✗ Numbers without context
script.js               ✗ Too generic
```

---

## 🎯 Common Tasks

### Adding a New Page

1. Create HTML: `new-page.html` (root)
2. Create CSS: `src/css/new-page.css`
3. Create JS: `src/js/new-page.js`
4. Update navigation in all pages

---

### Adding a New Component

1. Create CSS: `src/css/components.css` (add to existing)
2. Create JS: `src/js/components/component-name.js`
3. Import in main.js if needed

---

### Adding Portfolio Work

1. Save image: `src/images/portfolio/[category]/[name].[ext]`
2. Update: `work.html` - Add new card
3. Update: Filter if new category

---

### Updating Styles

**Global changes?**
→ `src/css/global.css`

**Component changes?**
→ `src/css/components.css`

**Page-specific?**
→ `src/css/[page-name].css`

**Responsive?**
→ `src/css/responsive.css`

---

## 🔍 Finding Files Quick

| Need to find... | Look in... |
|----------------|-----------|
| CSS variables | `src/css/global.css` |
| Button styles | `src/css/components.css` |
| Navigation code | `src/js/components/navigation.js` |
| Email form logic | `src/js/components/emailForm.js` |
| Hero section image | `src/images/profile/hero-photo.png` |
| Portfolio images | `src/images/portfolio/[category]/` |
| Software icons | `src/images/icons/software/` |
| Favicon | `public/favicon.ico` |
| Setup instructions | `docs/MIGRATION_GUIDE.md` |

---

## 🛠️ Path Reference

### In HTML Files:

**CSS:**
```html
<link href="src/css/global.css">
<link href="src/css/components.css">
<link href="src/css/home.css">
```

**JavaScript:**
```html
<script src="src/js/main.js"></script>
<script src="src/js/home.js"></script>
```

**Images:**
```html
<!-- Profile photo -->
<img src="src/images/profile/hero-photo.png">

<!-- Software icon -->
<img src="src/images/icons/software/photoshop.png">

<!-- Portfolio work -->
<img src="src/images/portfolio/3d-work/study-table.png">

<!-- Favicon -->
<link rel="icon" href="public/favicon.svg">
```

---

### In CSS Files:

**Background images:**
```css
.hero {
  background-image: url('../images/profile/hero-photo.png');
}
```

**Import fonts:**
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
```

---

### In JavaScript:

**Import modules:**
```javascript
import { initNavigation } from './components/navigation.js';
import { showModal } from './components/modal.js';
```

---

## 📦 Full Path Examples

```
Portfolio Homepage:
├── HTML: index.html
├── CSS: src/css/global.css
│        src/css/components.css
│        src/css/home.css
│        src/css/responsive.css
├── JS:  src/js/main.js
│        src/js/home.js
└── Images: src/images/profile/hero-photo.png
            src/images/icons/software/photoshop.png

Work Page:
├── HTML: work.html
├── CSS: src/css/global.css
│        src/css/components.css
│        src/css/work.css
│        src/css/responsive.css
├── JS:  src/js/main.js
│        src/js/work.js
│        src/js/components/filter.js
│        src/js/components/modal.js
└── Images: src/images/portfolio/[category]/[files]
```

---

## 🚨 Common Mistakes to Avoid

### ❌ Wrong:
```
src/hero-photo.png              (missing category)
images/photoshop.png            (not in src/)
css/style.css                   (not in src/)
script.js                       (not in src/js/)
src/images/IMG_001.png          (generic name)
src/css/style-2.css             (unclear purpose)
```

### ✅ Correct:
```
src/images/profile/hero-photo.png
src/images/icons/software/photoshop.png
src/css/global.css
src/js/main.js
src/images/portfolio/3d-work/study-table.png
src/css/work.css
```

---

## 📱 Mobile Development

All paths remain the same on mobile/desktop.
Responsive styles go in: `src/css/responsive.css`

---

## 🔄 Migration Reference

| Old Path | New Path |
|----------|----------|
| `assets/globleStyle.css` | `src/css/global.css` |
| `assets/style.css` | `src/css/home.css` |
| `assets-2/style-2.css` | `src/css/work.css` |
| `assets/script.js` | `src/js/home.js` |
| `assets-2/script-2.js` | `src/js/work.js` |
| `assets/Images/gagandeep-singh-hero-section-photo-1.png` | `src/images/profile/hero-photo.png` |
| `assets/icons/Photoshop.png` | `src/images/icons/software/photoshop.png` |
| `assets-2/my-work/3d/3d 1.png` | `src/images/portfolio/3d-work/study-table.png` |
| `Other files/favicon.ico` | `public/favicon.ico` |
| `robots.txt` | `public/robots.txt` |

---

## ⚡ Quick Commands

**Create new directories:**
```bash
mkdir -p src/css src/js src/images/portfolio/new-category
```

**Find a file:**
```bash
find src -name "hero-photo.png"
```

**List all CSS:**
```bash
ls src/css/
```

**List all images:**
```bash
ls -R src/images/
```

---

## 📞 Need Help?

Check these docs:
1. [File Structure Guide](FILE_STRUCTURE.md) - Detailed breakdown
2. [Migration Guide](MIGRATION_GUIDE.md) - Step-by-step migration
3. [Structure Comparison](STRUCTURE_COMPARISON.md) - Before/after visual

---

**Last Updated:** January 2026  
**Version:** 2.0
