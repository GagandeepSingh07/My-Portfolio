# Complete Migration and Update Guide

## ✅ Files Already Created:

1. ✓ src/css/global.css - CSS variables and reset
2. ✓ src/css/components.css - Reusable components  
3. ✓ src/js/main.js - Shared JavaScript functionality
4. ✓ All directory structure
5. ✓ All documentation files
6. ✓ MIGRATE.bat - File copy script

---

## 🚀 EXECUTE THESE STEPS IN ORDER:

### STEP 1: Run File Migration (2 minutes)

1. **Double-click**: `MIGRATE.bat` in your portfolio root folder
2. **Wait** for "Migration Complete!" message
3. All your images and old files will be copied to new locations

---

### STEP 2: Update index.html (5 minutes)

**Open `index.html` in your code editor (VS Code, Notepad++, etc.)**

#### A. Update CSS Links (Line ~10-12)

**FIND these lines:**
```html
<link rel="stylesheet" href="assets/globleStyle.css">
<link rel="stylesheet" href="assets/style.css">
```

**REPLACE with:**
```html
<link rel="stylesheet" href="src/css/global.css">
<link rel="stylesheet" href="src/css/components.css">
<link rel="stylesheet" href="src/css/home.css">
```

#### B. Update JavaScript Links (Line ~620)

**FIND:**
```html
<script defer src="assets/script.js"></script>
```

**REPLACE with:**
```html
<script defer src="src/js/main.js"></script>
<script defer src="src/js/home.js"></script>
```

#### C. Update Favicon Links (Line ~6-8)

**FIND:**
```html
<link rel="icon" type="image/svg+xml" href="Other files/favicon.svg">
<link rel="icon" type="image/x-icon" href="Other files/favicon.ico">
<link rel="apple-touch-icon" href="Other files/favicon.svg">
```

**REPLACE with:**
```html
<link rel="icon" type="image/svg+xml" href="public/favicon.svg">
<link rel="icon" type="image/x-icon" href="public/favicon.ico">
<link rel="apple-touch-icon" href="public/favicon.svg">
```

#### D. Update Image Paths - Use Find & Replace (Ctrl+H)

**Profile Images:**
```
Find: assets/Images/gagandeep-singh-hero-section-photo-1.png
Replace: src/images/profile/hero-photo.png

Find: assets/Images/gagandeep-singh-profile-photo-3.png
Replace: src/images/profile/about-photo.png

Find: assets/Images/gagandeep-singh-letter-box-photo-1.png
Replace: src/images/profile/letterbox-photo.png
```

**Software Icons - Do each one:**
```
Find: assets/icons/Photoshop.png
Replace: src/images/icons/software/photoshop.png

Find: assets/icons/After effects.png
Replace: src/images/icons/software/after-effects.png

Find: assets/icons/premiere pro.png
Replace: src/images/icons/software/premiere-pro.png

Find: assets/icons/Illustrator.png
Replace: src/images/icons/software/illustrator.png

Find: assets/icons/DaVinci Resolve.png
Replace: src/images/icons/software/davinci-resolve.png

Find: assets/icons/Maya.png
Replace: src/images/icons/software/maya.png

Find: assets/icons/Blender.png
Replace: src/images/icons/software/blender.png

Find: assets/icons/Coreldraw.png
Replace: src/images/icons/software/coreldraw.png

Find: assets/icons/Figma.png
Replace: src/images/icons/software/figma.png

Find: assets/icons/Affinity.png
Replace: src/images/icons/software/affinity.png

Find: assets/icons/Gumroad-G.png
Replace: src/images/icons/software/gumroad-g.png
```

#### E. Update Links to Work Page

**FIND all instances of:**
```html
href="my-work.html"
```

**REPLACE with:**
```html
href="work.html"
```

---

### STEP 3: Update my-work.html → work.html (5 minutes)

**First, RENAME the file:**
- Right-click `my-work.html`
- Rename to `work.html`

**Then open `work.html` in your editor:**

#### A. Update CSS Links (Line ~7)

**FIND:**
```html
<link rel="stylesheet" href="assets-2/style-2.css" />
```

**REPLACE with:**
```html
<link rel="stylesheet" href="src/css/global.css">
<link rel="stylesheet" href="src/css/components.css">
<link rel="stylesheet" href="src/css/work.css">
```

#### B. Update JavaScript Links (Line ~590-592)

**FIND:**
```html
<script src="assets-2/script-2.js"></script>
<script src="assets/script.js"></script>
```

**REPLACE with:**
```html
<script src="src/js/main.js"></script>
<script src="src/js/work.js"></script>
```

#### C. Update Favicon Links

**FIND:**
```html
<link rel="icon" type="image/svg+xml" href="Other files/favicon.svg">
<link rel="icon" type="image/x-icon" href="Other files/favicon.ico">
<link rel="apple-touch-icon" href="Other files/favicon.svg">
```

**REPLACE with:**
```html
<link rel="icon" type="image/svg+xml" href="public/favicon.svg">
<link rel="icon" type="image/x-icon" href="public/favicon.ico">
<link rel="apple-touch-icon" href="public/favicon.svg">
```

#### D. Update Portfolio Images - Use Find & Replace (Ctrl+H)

**Social Media Posts:**
```
Find: assets-2/my-work/posts/1.jpg
Replace: src/images/portfolio/social-media/carryon-faucets-1.jpg

Find: assets-2/my-work/posts/2.jpg
Replace: src/images/portfolio/social-media/faher-facewash.jpg

Find: assets-2/my-work/posts/3.jpg
Replace: src/images/portfolio/social-media/carryon-faucets-2.jpg

Find: assets-2/my-work/posts/4.jpg
Replace: src/images/portfolio/social-media/cosmogen-shampoo.jpg
```

**3D Work:**
```
Find: assets-2/my-work/3d/3d 1.png
Replace: src/images/portfolio/3d-work/study-table.png

Find: assets-2/my-work/3d/3d 2.png
Replace: src/images/portfolio/3d-work/procedural-planet.png

Find: assets-2/my-work/3d/3d 3.png
Replace: src/images/portfolio/3d-work/interior-design.png

Find: assets-2/my-work/3d/3d 4.png
Replace: src/images/portfolio/3d-work/work-4.png

Find: assets-2/my-work/3d/3d 5.png
Replace: src/images/portfolio/3d-work/work-5.png

Find: assets-2/my-work/3d/3d 6.png
Replace: src/images/portfolio/3d-work/exterior-design.png

Find: assets-2/my-work/3d/3d 7.png
Replace: src/images/portfolio/3d-work/work-7.png

Find: assets-2/my-work/3d/3d 8.png
Replace: src/images/portfolio/3d-work/donut-model.png
```

**Logos:**
```
Find: assets-2/my-work/logos/1.png
Replace: src/images/portfolio/logos/logo-competition-1.png

Find: assets-2/my-work/logos/2.png
Replace: src/images/portfolio/logos/logo-competition-2.png

Find: assets-2/my-work/logos/3.png
Replace: src/images/portfolio/logos/typecraft-logo.png

Find: assets-2/my-work/logos/4.png
Replace: src/images/portfolio/logos/music-channel-logo.png

Find: assets-2/my-work/logos/5.png
Replace: src/images/portfolio/logos/unit-converter-logo.png
```

**Reels:**
```
Find: assets-2/my-work/reels/nexus-launch.png
Replace: src/images/portfolio/reels/nexus-launch.png

Find: assets-2/my-work/reels/nexus-promotion.png
Replace: src/images/portfolio/reels/nexus-promotion.png

Find: assets-2/my-work/reels/callon-nuts-ad.png
Replace: src/images/portfolio/reels/callon-nuts-ad.png

Find: assets-2/my-work/reels/callon-nuts-post.png
Replace: src/images/portfolio/reels/callon-nuts-post.png

Find: assets-2/my-work/reels/grandambassador-post1.png
Replace: src/images/portfolio/reels/grandambassador-post1.png

Find: assets-2/my-work/reels/grandambassador-post2.png
Replace: src/images/portfolio/reels/grandambassador-post2.png
```

**Certificates:**
```
Find: assets-2/my-work/certificates/1.png
Replace: src/images/portfolio/certificates/code-crafter.png

Find: assets-2/my-work/certificates/2.png
Replace: src/images/portfolio/certificates/data-visualization.png

Find: assets-2/my-work/certificates/3.png
Replace: src/images/portfolio/certificates/big-data-analytics.png

Find: assets-2/my-work/certificates/4.png
Replace: src/images/portfolio/certificates/quiz-competition.png
```

**UI Icons:**
```
Find: assets-2/icons-2/play-button.svg
Replace: src/images/icons/ui/play-button.svg

Find: assets-2/icons-2/bx-arrow-back.svg
Replace: src/images/icons/ui/arrow-back.svg
```

---

### STEP 4: Copy JavaScript Files (1 minute)

**Copy the content from old JS files to new ones:**

1. Copy content from `assets/script.js` to `src/js/home.js`
2. Copy content from `assets-2/script-2.js` to `src/js/work.js`

**Note:** The email form and resume link functions are already in `main.js`, so you can remove those from home.js and work.js if they exist.

---

### STEP 5: Copy CSS Files (1 minute)

1. Copy content from `assets/style.css` to `src/css/home.css`
2. Copy content from `assets-2/style-2.css` to `src/css/work.css`

---

### STEP 6: Test Everything (5 minutes)

#### Test Homepage:
1. Open `index.html` in browser
2. Check all images load ✓
3. Check styling looks correct ✓
4. Test navigation menu ✓
5. Test all buttons ✓
6. Test email form ✓

#### Test Work Page:
1. Open `work.html` in browser
2. Check portfolio images load ✓
3. Test filter buttons ✓
4. Test image modal viewer ✓
5. Check responsive mobile view ✓

#### Open Browser Console (F12):
- Look for any errors (red text)
- Check for 404 errors (missing files)
- All should be green/clean

---

### STEP 7: Deploy (2 minutes)

If everything works locally:

```bash
# If using Git
git add .
git commit -m "Restructured portfolio - professional file organization v2.0"
git push

# Vercel will auto-deploy
```

Or manually deploy through Vercel dashboard.

---

### STEP 8: Verify Live Site (2 minutes)

1. Visit your live URL
2. Test all pages
3. Test all features
4. Check mobile view
5. Verify all images load

---

### STEP 9: Clean Up (Optional - After 30 days)

Once you're confident everything works:

**Delete old folders:**
- `assets/`
- `assets-2/`
- `Other files/`

**Keep:**
- `archive/` (for 30 days as backup)

---

## ✅ Completion Checklist

- [ ] Ran MIGRATE.bat successfully
- [ ] Updated index.html paths
- [ ] Updated work.html paths
- [ ] Renamed my-work.html to work.html
- [ ] Copied JS files to src/js/
- [ ] Copied CSS files to src/css/
- [ ] Tested homepage locally
- [ ] Tested work page locally
- [ ] No console errors
- [ ] Deployed to Vercel
- [ ] Verified live site works
- [ ] Updated README.md (optional)

---

## 🎉 You're Done!

Your portfolio now has a professional, industry-standard file structure!

**Benefits:**
✅ Organized and maintainable
✅ Easy to scale
✅ Professional appearance
✅ Ready for collaboration
✅ Build-tool ready

---

## 🆘 If You Need Help

Check these files:
- `docs/MIGRATION_GUIDE.md` - Detailed guide
- `docs/QUICK_REFERENCE.md` - Quick commands
- `docs/STRUCTURE_COMPARISON.md` - Before/after

---

**Total Time:** 20-30 minutes
**Difficulty:** Easy to Medium
**Result:** Professional portfolio structure! 🚀
