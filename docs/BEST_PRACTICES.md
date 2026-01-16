# Portfolio Best Practices Guide

## 📋 Table of Contents
1. [Code Quality](#code-quality)
2. [Performance Optimization](#performance-optimization)
3. [Accessibility](#accessibility)
4. [SEO Best Practices](#seo-best-practices)
5. [Security](#security)
6. [Version Control](#version-control)
7. [Testing](#testing)
8. [Deployment](#deployment)

---

## 🎯 Code Quality

### HTML Best Practices

✅ **DO:**
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Include proper meta tags (viewport, description, keywords)
- Use descriptive alt text for all images
- Validate HTML with W3C validator
- Use ARIA labels for accessibility

```html
<!-- Good -->
<header class="site-header" role="banner">
    <nav class="main-nav" role="navigation" aria-label="Main navigation">
        <ul>
            <li><a href="#home">Home</a></li>
        </ul>
    </nav>
</header>

<!-- Bad -->
<div class="header">
    <div class="nav">
        <div class="link">Home</div>
    </div>
</div>
```

❌ **DON'T:**
- Use inline styles (use CSS classes instead)
- Use deprecated tags (`<font>`, `<center>`, `<marquee>`)
- Create div soup (too many nested divs)
- Forget closing tags

### CSS Best Practices

✅ **DO:**
- Use CSS variables for colors and repeated values
- Follow BEM or consistent naming convention
- Group related properties together
- Use mobile-first approach
- Minimize use of `!important`

```css
/* Good - BEM naming */
.card {
    background: var(--color-bg);
}

.card__title {
    color: var(--color-primary);
}

.card__title--featured {
    font-weight: bold;
}

/* Good - Mobile first */
.container {
    width: 100%;
    padding: 20px;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
        padding: 30px;
    }
}
```

❌ **DON'T:**
- Use IDs for styling (use classes)
- Over-specify selectors
- Use magic numbers without comments
- Mix units (px, em, rem) inconsistently

### JavaScript Best Practices

✅ **DO:**
- Use `const` and `let` instead of `var`
- Add error handling with try-catch
- Use strict mode
- Comment complex logic
- Check if elements exist before using them
- Use event delegation for dynamic elements

```javascript
'use strict';

// Good - Defensive programming
function initFeature() {
    const element = document.getElementById('myElement');
    
    if (!element) {
        console.warn('Element not found');
        return;
    }
    
    try {
        element.addEventListener('click', handleClick);
    } catch (error) {
        console.error('Failed to initialize:', error);
    }
}

// Good - Event delegation
document.body.addEventListener('click', (e) => {
    if (e.target.matches('.dynamic-button')) {
        handleDynamicClick(e);
    }
});
```

❌ **DON'T:**
- Use global variables
- Forget error handling
- Use deprecated methods
- Modify prototypes of native objects
- Use synchronous AJAX requests

---

## ⚡ Performance Optimization

### Images

✅ **DO:**
```html
<!-- Use modern image formats with fallbacks -->
<picture>
    <source srcset="hero.avif" type="image/avif">
    <source srcset="hero.webp" type="image/webp">
    <img src="hero.jpg" alt="Hero image" loading="lazy">
</picture>

<!-- Use responsive images -->
<img srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"
     sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
     src="medium.jpg" alt="Responsive image">
```

**Image Optimization Checklist:**
- [ ] Compress images (use tools like TinyPNG, Squoosh)
- [ ] Use appropriate formats (WebP, AVIF for photos; SVG for logos/icons)
- [ ] Implement lazy loading for below-fold images
- [ ] Serve responsive images with srcset
- [ ] Set explicit width and height to prevent layout shift
- [ ] Use SVG for icons when possible

### CSS Optimization

```css
/* Good - Efficient selector */
.card-title { }

/* Bad - Inefficient selector */
body div.container ul li a.card-title { }
```

**CSS Performance Checklist:**
- [ ] Minify CSS for production
- [ ] Remove unused CSS
- [ ] Use CSS containment where appropriate
- [ ] Avoid expensive properties (box-shadow on scroll)
- [ ] Use will-change sparingly

### JavaScript Optimization

```javascript
// Good - Debounce expensive operations
const handleResize = debounce(() => {
    // Expensive operation
    recalculateLayout();
}, 250);

window.addEventListener('resize', handleResize);

// Good - Request Animation Frame for animations
function animate() {
    // Animation code
    element.style.transform = `translateX(${x}px)`;
    
    requestAnimationFrame(animate);
}
```

**JavaScript Performance Checklist:**
- [ ] Defer non-critical JavaScript
- [ ] Minify and bundle JavaScript
- [ ] Use debounce/throttle for scroll/resize events
- [ ] Avoid memory leaks (remove event listeners)
- [ ] Use requestAnimationFrame for animations

### Loading Strategy

```html
<!-- Critical CSS inline -->
<style>
    /* Critical above-the-fold styles */
</style>

<!-- Non-critical CSS deferred -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- JavaScript deferred -->
<script defer src="main.js"></script>

<!-- Non-critical JavaScript loaded later -->
<script>
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            const script = document.createElement('script');
            script.src = 'non-critical.js';
            document.body.appendChild(script);
        });
    }
</script>
```

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
```html
<!-- All interactive elements must be keyboard accessible -->
<button onclick="doSomething()">Click me</button> <!-- Good -->
<div onclick="doSomething()">Click me</div> <!-- Bad -->
```

**ARIA Labels:**
```html
<!-- Good -->
<button aria-label="Close modal" class="close-btn">×</button>
<nav aria-label="Main navigation">...</nav>

<!-- Form labels -->
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```

**Accessibility Checklist:**
- [ ] Color contrast ratio at least 4.5:1 for normal text
- [ ] All images have descriptive alt text
- [ ] Forms have proper labels
- [ ] Skip to main content link present
- [ ] Focus indicators visible
- [ ] No keyboard traps
- [ ] Screen reader friendly
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Links have descriptive text (not "click here")
- [ ] ARIA landmarks used properly

### Focus Management

```css
/* Visible focus indicator */
:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
}

/* Don't remove outlines completely */
button:focus {
    outline: none; /* ❌ BAD */
}
```

---

## 🔍 SEO Best Practices

### Meta Tags

```html
<head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gagandeep Singh | Graphic Designer Portfolio</title>
    <meta name="description" content="Professional graphic designer specializing in branding, motion graphics, and web design.">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://singhgagan-portfolio.vercel.app/">
    <meta property="og:title" content="Gagandeep Singh | Graphic Designer">
    <meta property="og:description" content="Professional graphic designer portfolio">
    <meta property="og:image" content="https://singhgagan-portfolio.vercel.app/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://singhgagan-portfolio.vercel.app/">
    <meta property="twitter:title" content="Gagandeep Singh | Graphic Designer">
    <meta property="twitter:description" content="Professional graphic designer portfolio">
    <meta property="twitter:image" content="https://singhgagan-portfolio.vercel.app/twitter-image.jpg">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://singhgagan-portfolio.vercel.app/">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Gagandeep Singh",
        "url": "https://singhgagan-portfolio.vercel.app/",
        "image": "profile.jpg",
        "sameAs": [
            "https://www.linkedin.com/in/singhgagan07/",
            "https://github.com/GagandeepSingh07"
        ]
    }
    </script>
</head>
```

### SEO Checklist

- [ ] Unique, descriptive title tags (50-60 characters)
- [ ] Compelling meta descriptions (150-160 characters)
- [ ] Semantic HTML5 structure
- [ ] Fast page load times (< 3 seconds)
- [ ] Mobile-friendly/responsive design
- [ ] HTTPS enabled
- [ ] XML sitemap created
- [ ] Robots.txt configured
- [ ] Structured data implemented
- [ ] Descriptive URLs (avoid ?id=123)
- [ ] Internal linking strategy
- [ ] Alt text for all images

---

## 🔒 Security

### Security Best Practices

```html
<!-- CSP Header -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' https://trusted-cdn.com">

<!-- Form Security -->
<form method="POST" action="/submit">
    <!-- Add CSRF token in production -->
    <input type="hidden" name="csrf_token" value="...">
</form>
```

**Security Checklist:**
- [ ] Use HTTPS
- [ ] Sanitize user inputs
- [ ] Implement Content Security Policy
- [ ] Keep dependencies updated
- [ ] No sensitive data in client-side code
- [ ] Validate all inputs
- [ ] Use secure headers

---

## 📝 Version Control

### Git Best Practices

**Commit Messages:**
```bash
# Good
git commit -m "fix: resolve email form validation bug"
git commit -m "feat: add lazy loading for portfolio images"
git commit -m "docs: update README with installation steps"

# Bad
git commit -m "fix stuff"
git commit -m "update"
git commit -m "asdf"
```

**Commit Message Format:**
```
<type>: <subject>

<body>

<footer>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Branching Strategy:**
```bash
main (production)
├── develop (staging)
    ├── feature/new-portfolio-section
    ├── fix/navigation-bug
    └── refactor/css-organization
```

**.gitignore Essentials:**
```
node_modules/
.env
.DS_Store
dist/
*.log
```

---

## 🧪 Testing

### Manual Testing Checklist

**Functionality:**
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Navigation works on all pages
- [ ] Images load properly
- [ ] Videos/media play correctly

**Cross-Browser:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

**Responsive:**
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1200px+)
- [ ] Large desktop (1920px+)

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient
- [ ] Focus indicators visible

**Performance:**
- [ ] Lighthouse score > 90
- [ ] Load time < 3 seconds
- [ ] Images optimized
- [ ] No console errors

---

## 🚀 Deployment

### Pre-Deployment Checklist

- [ ] Test on staging environment
- [ ] Run Lighthouse audit
- [ ] Check all links
- [ ] Verify meta tags
- [ ] Test forms
- [ ] Check analytics setup
- [ ] Verify sitemap.xml
- [ ] Test 404 page
- [ ] Check robots.txt
- [ ] Minify CSS/JS
- [ ] Optimize images
- [ ] Set up error monitoring

### Vercel Deployment

```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/src/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 📊 Performance Metrics

### Target Metrics

- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to Interactive (TTI):** < 3.8s
- **Total Blocking Time (TBT):** < 200ms

### Tools

- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- WebPageTest
- GTmetrix
- Chrome User Experience Report

---

## 🔄 Maintenance

### Regular Tasks

**Weekly:**
- Check analytics
- Monitor uptime
- Review form submissions

**Monthly:**
- Update dependencies
- Review performance metrics
- Check for broken links
- Review and update content

**Quarterly:**
- Security audit
- Accessibility audit
- SEO audit
- Design refresh consideration

---

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [Can I Use](https://caniuse.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

**Last Updated:** January 2026  
**Version:** 1.0
