# Quick Reference: Portfolio Data Structure

## Current Portfolio Stats
- **Total Items**: 30
- **Categories**: 5 (Social Media, 3D Work, Logos, Reels, Certificates)
- **Images Added**: ✅ All images from your collection

---

## Category Breakdown

| Category | Count | Badge Distribution |
|----------|-------|-------------------|
| Social Media | 4 | 1 NEW, 2 RECENT, 1 none |
| 3D Work | 8 | 1 NEW, 3 RECENT, 4 none |
| Logos | 5 | 2 NEW, 1 RECENT, 2 none |
| Reels | 9 | 2 NEW, 4 RECENT, 3 none |
| Certificates | 4 | 1 RECENT, 3 none |

---

## File Structure

```
public/
└── images/
    └── portfolio/
        ├── social-media/     (4 images)
        ├── 3d-work/          (8 images)
        ├── logos/            (5 images)
        ├── reels/            (9 images)
        └── certificates/     (4 images)
```

---

## Image Path Format

All images use the pattern:
```
/images/portfolio/{category}/{filename}
```

Examples:
- `/images/portfolio/social-media/cosmogen-shampoo.jpg`
- `/images/portfolio/3d-work/donut-model.png`
- `/images/portfolio/logos/typecraft-logo.png`
- `/images/portfolio/reels/nexus-launch.png`
- `/images/portfolio/certificates/big-data-analytics.png`

---

## Testing Checklist

- [ ] Start dev server: `npm run dev`
- [ ] Visit: `http://localhost:3000/work`
- [ ] Check all 30 items load correctly
- [ ] Test category filters (should show correct counts)
- [ ] Click images for fullscreen view
- [ ] Verify play icons show on reels
- [ ] Test responsive layout on mobile
- [ ] Check badge colors and labels

---

## Customization Guide

### To Add New Items:
1. Add image to `/public/images/portfolio/{category}/`
2. Add entry to `/data/portfolio-data.js`
3. Use this template:
   ```javascript
   {
       title: 'Project Name',
       image: '/images/portfolio/category/filename.ext',
       category: 'category-name',
       badge: 'new', // optional
       type: 'image', // or 'reel', 'landing'
       playIcon: true // only for videos
   }
   ```

### To Update Badges:
Edit `/data/portfolio-data.js` and change the `badge` property:
- `badge: 'new'` - Green badge
- `badge: 'recent'` - Blue badge
- `badge: 'replaced'` - Yellow badge
- `badge: 'old'` - Red badge
- Remove badge property for no badge

---

Ready to go! 🚀
