# 🧹 Cleanup Script

This file lists the old template files that can be safely deleted since they've been replaced with new portfolio-focused versions.

## Files to Delete (Old Template Files)

### In `/sections` directory:
- ❌ `features.jsx` (replaced by `services.jsx`)
- ❌ `pricing-plans.jsx` (replaced by `service-packages.jsx`)
- ❌ `trusted-companies.jsx` (replaced by `featured-clients.jsx`)
- ❌ `workflow-steps.jsx` (replaced by `creative-process.jsx`)

### How to Delete (Windows):
```cmd
cd sections
del features.jsx
del pricing-plans.jsx
del trusted-companies.jsx
del workflow-steps.jsx
```

### How to Delete (Mac/Linux):
```bash
cd sections
rm features.jsx pricing-plans.jsx trusted-companies.jsx workflow-steps.jsx
```

### Or manually:
Simply delete these 4 files from the `/sections` folder using File Explorer or Finder.

---

## Why Delete These Files?

These files are from the original AI SaaS template and are no longer used in the portfolio version. The new files have:
- ✅ Portfolio-appropriate content
- ✅ Creative industry terminology
- ✅ Design/video service focus
- ✅ Better naming conventions

The main page (`app/(public-pages)/page.jsx`) now imports only the new files, so these old ones are just taking up space.

---

## Verification

After deletion, your `/sections` folder should contain only these files:
- ✅ `call-to-action.jsx`
- ✅ `creative-process.jsx`
- ✅ `faq-section.jsx`
- ✅ `featured-clients.jsx`
- ✅ `hero-section.jsx`
- ✅ `service-packages.jsx`
- ✅ `services.jsx`
- ✅ `testimonials.jsx`

Total: 8 files (all portfolio-focused)
