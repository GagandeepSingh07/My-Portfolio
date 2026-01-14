# 🎨 Portfolio - Improved File Structure

Welcome to the restructured version of my professional portfolio! This repository now follows industry best practices for organization and maintainability.

---

## 📁 New File Structure

```
My-Portfolio/
│
├── 📁 src/                          # Source files
│   ├── 📁 css/                      # Stylesheets
│   │   ├── global.css               # Variables & reset
│   │   ├── components.css           # Reusable components
│   │   ├── home.css                 # Homepage styles
│   │   ├── work.css                 # Work page styles
│   │   └── responsive.css           # Media queries
│   │
│   ├── 📁 js/                       # JavaScript
│   │   ├── main.js                  # Core functionality
│   │   ├── home.js                  # Homepage scripts
│   │   ├── work.js                  # Work page scripts
│   │   └── 📁 components/           # JS modules
│   │
│   └── 📁 images/                   # All images
│       ├── 📁 icons/                # UI & software icons
│       ├── 📁 profile/              # Personal photos
│       └── 📁 portfolio/            # Work samples
│
├── 📁 public/                       # Static public files
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── 📁 docs/                         # Documentation
│   ├── FILE_STRUCTURE.md            # Structure guide
│   ├── MIGRATION_GUIDE.md           # Migration steps
│   └── DEPLOYMENT.md                # Deploy instructions
│
├── index.html                       # Homepage
├── work.html                        # Portfolio gallery
├── package.json
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/GagandeepSingh07/My-Portfolio.git
cd My-Portfolio
```

### 2. Open Locally
Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx live-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### 3. Make Changes
- Edit HTML files in root directory
- Modify styles in `src/css/`
- Update scripts in `src/js/`
- Add images to `src/images/`

### 4. Deploy
```bash
# Deploy to Vercel
vercel --prod

# Or commit and push (if auto-deploy enabled)
git add .
git commit -m "Your changes"
git push origin main
```

---

## 📖 Documentation

### Structure & Organization
- **[File Structure Guide](docs/FILE_STRUCTURE.md)** - Detailed breakdown of organization
- **[Migration Guide](docs/MIGRATION_GUIDE.md)** - Step-by-step restructuring instructions

### Development
- **[Deployment Guide](docs/DEPLOYMENT.md)** - How to deploy to various platforms
- **[Changelog](docs/CHANGELOG.md)** - Version history and updates

---

## ✨ Key Features

### Homepage
- **Animated Site Loader** - Professional loading experience
- **Hero Section** - Eye-catching introduction
- **About Section** - Personal story and background
- **Education Timeline** - Interactive timeline/card toggle
- **Experience Cards** - Professional journey showcase
- **Skills Gallery** - Software proficiency display
- **Portfolio Preview** - Featured work samples
- **Responsive Footer** - Multi-column with social links

### Work Page
- **Portfolio Gallery** - 40+ work samples
- **Smart Filtering** - 9 categories with live counts
- **Masonry Layout** - Responsive grid system
- **Modal Viewer** - Fullscreen image preview
- **Instagram Integration** - Direct reel playback
- **YouTube Embeds** - Video portfolio items

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no frameworks

### Design
- **Fonts:** Google Fonts (Outfit, Roboto)
- **Icons:** Font Awesome 6.7.2
- **Colors:** Custom CSS variables
- **Animations:** CSS transitions & keyframes

### Tools
- **Git** - Version control
- **Vercel** - Deployment platform
- **Live Server** - Local development

---

## 🎨 Design System

### Color Palette
```css
--bg-color: #030C44;           /* Deep blue background */
--card-bg-color: #1C1853;      /* Purple-blue cards */
--accent-color: #89D1D1;       /* Cyan accent */
--accent-color-2: #908FDB;     /* Lavender accent */
--text-color: #f0f0f0;         /* Off-white text */
```

### Typography
```css
--heading-font: 'Outfit', sans-serif;
--body-text-font: 'Roboto', sans-serif;
```

### Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1024px
- Mobile: 480px - 768px
- Small: < 480px

---

## 📦 Project Structure Benefits

### ✅ Organized
- Clear separation of concerns
- Logical file grouping
- Easy to navigate

### ✅ Scalable
- Simple to add new pages
- Modular component structure
- Ready for build tools

### ✅ Maintainable
- Consistent naming conventions
- Well-documented code
- Easy to update

### ✅ Professional
- Industry-standard structure
- Git-friendly organization
- Build-ready setup

---

## 🔧 Development Workflow

### 1. Local Development
```bash
# Start local server
npx live-server

# Make changes to files
# Browser auto-refreshes
```

### 2. Testing
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Check responsive design (Mobile, Tablet, Desktop)
- Validate HTML/CSS
- Check accessibility

### 3. Deployment
```bash
# Commit changes
git add .
git commit -m "Description of changes"
git push origin main

# Deploy (if not auto-deployed)
vercel --prod
```

---

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- 📱 **Mobile Phones** (320px - 480px)
- 📱 **Tablets** (481px - 1024px)
- 💻 **Laptops** (1025px - 1440px)
- 🖥️ **Desktops** (1441px+)

---

## ♿ Accessibility Features

- **Semantic HTML** - Proper heading hierarchy
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus States** - Visible focus indicators
- **Alt Text** - Descriptive image alternatives
- **Color Contrast** - WCAG AA compliant

---

## 🚀 Performance

### Optimizations
- ⚡ Lazy loading images
- ⚡ Deferred script loading
- ⚡ CSS-only animations
- ⚡ Optimized asset delivery
- ⚡ Minimal JavaScript

### Scores
- **Lighthouse Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

---

## 🔗 Links

- **Live Site:** [singhgagan-portfolio.vercel.app](https://singhgagan-portfolio.vercel.app/)
- **GitHub:** [github.com/GagandeepSingh07](https://github.com/GagandeepSingh07)
- **LinkedIn:** [linkedin.com/in/singhgagan07](https://www.linkedin.com/in/singhgagan07/)
- **Behance:** [behance.net/singhgagan07](https://www.behance.net/singhgagan07)
- **Instagram:** [@gagan.designs.07](https://www.instagram.com/gagan.designs.07)

---

## 👤 About Me

Hi, I'm **Gagandeep Singh** - a Graphic Designer and Visual Storyteller passionate about creating visually captivating designs that make a difference.

### Skills
- **Graphic Design** (Adobe Photoshop, Illustrator)
- **Motion Graphics** (After Effects, Premiere Pro)
- **3D Modeling** (Maya, Blender)
- **Video Editing** (DaVinci Resolve, Premiere Pro)
- **Web Design** (HTML, CSS, JavaScript, Figma)

### Contact
- 📧 Email: [singhgagan40951@gmail.com](mailto:singhgagan40951@gmail.com)
- 📱 Phone: [+91 84275-05176](tel:+918427505176)
- 📄 Resume: [Download PDF](https://drive.google.com/file/d/1rgmzbXrdn2-9fj8CuEKNUkBxl-J8aITK/view)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Font Awesome
- Fonts from Google Fonts
- Hosting by Vercel

---

## 📝 Changelog

### Version 2.0.0 (January 2026)
- ✨ Complete file structure reorganization
- 📁 New modular directory system
- 🎨 Separated CSS into components
- 📦 Better asset organization
- 📚 Comprehensive documentation
- 🔧 Improved development workflow

### Version 1.0.0 (2025)
- 🎉 Initial release
- 🏠 Homepage with hero section
- 💼 Portfolio gallery page
- 📱 Responsive design
- ♿ Accessibility features

---

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💬 Support

If you have questions or need help:

1. Check the [documentation](docs/)
2. Open an [issue](https://github.com/GagandeepSingh07/My-Portfolio/issues)
3. Contact me directly via [email](mailto:singhgagan40951@gmail.com)

---

**Made with ❤️ by Gagandeep Singh**

⭐ Star this repo if you found it helpful!
