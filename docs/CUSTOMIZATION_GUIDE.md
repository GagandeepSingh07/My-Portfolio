# 🎨 Quick Customization Guide

This guide helps you quickly customize the portfolio with your own content.

---

## 📝 Update Your Information

### 1. Hero Section
**File:** `sections/hero-section.jsx`

```javascript
// Line 24: Update tagline
<p>Creative. Bold. Unforgettable.</p>

// Line 33-35: Update main headline
<h1>Turning Ideas into Visual Stories That Captivate & Inspire</h1>

// Line 42-44: Update description
<p>A graphic designer & video editor specializing in...</p>
```

---

### 2. Services
**File:** `sections/services.jsx`

Update the `servicesData` array (starting around line 10) with your actual services:
```javascript
{
    icon: BrushIcon, // Choose from lucide-react icons
    title: "Your Service Name",
    description: "Your service description",
}
```

---

### 3. Client Testimonials
**File:** `sections/testimonials.jsx`

Update the `data` array (starting around line 10) with real client feedback:
```javascript
{
    review: 'Client testimonial text',
    name: 'Client Name',
    about: 'Client Title/Company',
    rating: 5,
    image: 'https://your-image-url.com/photo.jpg',
}
```

---

### 4. Service Packages/Pricing
**File:** `sections/service-packages.jsx`

Update the `data` array with your actual packages and pricing:
```javascript
{
    title: 'Package Name',
    description: 'Package description',
    price: '$999', // Your price
    features: [
        'Feature 1',
        'Feature 2',
        // Add more features
    ],
}
```

---

### 5. FAQ
**File:** `sections/faq-section.jsx`

Update the `data` array with your actual FAQs:
```javascript
{
    question: 'Your question?',
    answer: 'Your detailed answer here.',
}
```

---

### 6. Navigation Links
**File:** `components/navbar.jsx`

Update the `links` array (around line 14):
```javascript
const links = [
    { name: 'Home', href: '#home' },
    { name: 'Your Section', href: '#your-section' },
    // Add more links
];
```

---

### 7. Footer
**File:** `components/footer.jsx`

```javascript
// Update footer links (around line 27)
const links = [
    { name: 'Link Name', href: '#section' },
];

// Update social media links (around line 44-60)
<a href="YOUR_INSTAGRAM_URL">...</a>
<a href="YOUR_BEHANCE_URL">...</a>
<a href="YOUR_LINKEDIN_URL">...</a>
<a href="YOUR_YOUTUBE_URL">...</a>

// Update copyright (around line 65-66)
<p>© 2025 Your Name. All rights reserved.</p>
```

---

## 🎨 Branding Updates

### Logo
**Replace:** `/public/assets/logo.svg`
- Create or export your logo as SVG
- Name it `logo.svg` and replace the existing file

### Favicon
**Replace:** `/app/favicon.ico`
- Your 32x32 or 16x16 icon file

### Colors
**File:** `app/globals.css`

Update the gradient colors:
```css
/* Hero background gradients (around line 50+) */
bg-[#D10A8A] /* Pink gradient */
bg-[#2E08CF] /* Blue gradient */
bg-[#F26A06] /* Orange gradient */
```

---

## 📸 Images to Replace

### Process/Workflow Images
**Location:** `/public/assets/`
- `workflow1.png` - First step image
- `workflow2.png` - Second step image
- `workflow3.png` - Third step image

**Recommended size:** 1200x800px

### Client Logos
**Location:** `/public/assets/`
- `company-logo-1.svg`
- `company-logo-2.svg`
- `company-logo-3.svg`
- `company-logo-4.svg`
- `company-logo-5.svg`

**Format:** SVG (preferred) or PNG with transparency

---

## 🔍 SEO Updates

### Page Metadata
**File:** `app/(public-pages)/layout.js`

```javascript
export const metadata = {
    title: 'Your Name - Graphic Designer & Video Editor',
    description: 'Your unique value proposition here.',
};
```

---

## 🎯 Section IDs

Update section IDs in each section file to match your navigation:

- `#home` - Hero section
- `#services` - Services section
- `#process` - Creative process section
- `#testimonials` - Testimonials section
- `#faq` - FAQ section
- `#pricing` - Pricing section

Make sure these match in:
1. Section components (`id="section-name"`)
2. Navigation links (`href="#section-name"`)

---

## 🚀 Quick Testing Checklist

After customization:
- [ ] All navigation links work correctly
- [ ] Images load properly
- [ ] Social media links are updated
- [ ] Contact information is correct
- [ ] Prices are accurate
- [ ] FAQ answers your common questions
- [ ] Testimonials are from real clients
- [ ] Logo displays correctly
- [ ] Mobile responsive design works
- [ ] Animations are smooth

---

## 💡 Pro Tips

1. **Images:** Use optimized images (WebP format recommended)
2. **Content:** Keep descriptions concise and impactful
3. **CTAs:** Make call-to-action buttons clear and compelling
4. **Testimonials:** Use real client photos if possible (with permission)
5. **Pricing:** Consider adding a "Contact for custom quote" option
6. **Social Proof:** Add client logos from recognizable brands

---

## 🆘 Need Help?

Common issues:
- **Images not loading?** Check file paths and extensions
- **Links not working?** Verify section IDs match href attributes
- **Styles not applying?** Clear Next.js cache: `rm -rf .next`
- **Build errors?** Run `npm install` to ensure all dependencies are installed

---

**Ready to launch?** Run `npm run build` to create a production build!
