# Work Page Integration Guide

This guide explains how to set up and customize your new work portfolio page.

## 📁 Files Created

### Pages
- `/app/work/page.jsx` - Main work page

### Sections
- `/sections/work/work-title.jsx` - Animated title section
- `/sections/work/portfolio-gallery.jsx` - Portfolio grid with filters
- `/sections/work/work-footer.jsx` - Footer with email form
- `/sections/work/programming-work.jsx` - Programming projects section (optional)

### Components
- `/components/work/portfolio-card.jsx` - Individual portfolio item card
- `/components/work/fullscreen-modal.jsx` - Image viewer modal

### Data
- `/data/portfolio-data.js` - Portfolio items data

### Updated Files
- `/components/navbar.jsx` - Added "Work" link to navigation

## 🎨 Features Implemented

1. **Animated Title Section** - Rotating words animation
2. **Portfolio Gallery** - Filterable grid of work items
3. **Category Filters** - Filter by category with counts
4. **Responsive Cards** - Different aspect ratios (square, reel, landscape)
5. **Fullscreen Modal** - Click images to view full size
6. **Smooth Animations** - Fade transitions when filtering
7. **Badge System** - New, Recent, Replaced, Old badges
8. **Footer Section** - Email form and scroll to top

## 🚀 Setup Instructions

### 1. Create Image Directory

Create the following folder structure in `/public`:

```
/public
  /assets
    /portfolio
      /social-media
      /3d
      /logos
      /animation
      /videos
      /reels
      /gaming
      /certificates
      /programming
```

### 2. Add Your Images

Place your portfolio images in the appropriate folders. Update the paths in `/data/portfolio-data.js`:

```javascript
{
    title: 'Your Project Title',
    image: '/assets/portfolio/social-media/your-image.jpg',
    category: 'social-media',
    badge: 'new', // optional: 'new', 'recent', 'replaced', 'old'
    type: 'image' // or 'reel', 'landing', 'video'
}
```

### 3. Customize Portfolio Data

Edit `/data/portfolio-data.js` to add your actual portfolio items:

```javascript
export const portfolioData = [
    {
        title: 'Project Name',
        image: '/assets/portfolio/category/image.jpg',
        category: 'social-media', // or '3d-work', 'logos', etc.
        badge: 'new', // optional
        type: 'image', // 'image', 'reel', 'landing', 'video'
        playIcon: false // true for videos
    },
    // Add more items...
];
```

### 4. Categories Available

- `social-media` - Social Media Posts
- `3d-work` - 3D Work
- `logos` - Logos
- `animation` - Animation
- `videos` - Videos
- `reels` - Reels
- `gaming` - Gaming
- `certificates` - Certificates
- `programming` - Programming

### 5. Badge Types

- `new` - Green badge
- `recent` - Blue badge
- `replaced` - Yellow badge
- `old` - Red badge

### 6. Card Types

Different aspect ratios for different content:

- `image` - Square (1:1) - For posts, graphics
- `reel` - Portrait (9:16) - For Instagram reels, stories
- `landing` - Landscape (16:9) - For YouTube, certificates
- `video` - Landscape with play icon

## 🎯 Usage

### Enable Programming Section

In `/app/work/page.jsx`, uncomment this line:

```javascript
<ProgrammingWork />
```

### Customize Colors

The work page uses these CSS variables from your existing theme:

- Background: `#030c44` (dark blue)
- Card background: `#1c1853` (darker purple)
- Accent 1: `#89d1d1` (cyan)
- Accent 2: `#908fdb` (purple)

These match your existing design system.

## 📱 Responsive Design

The page is fully responsive:

- **Desktop**: 3-column grid
- **Tablet**: 2-column grid
- **Mobile**: Single column

## 🔗 Navigation

The work page is automatically added to your navbar with the route `/work`.

To navigate back to home, users can click the logo or use the navigation links.

## ⚡ Performance Tips

1. **Optimize Images**: Use Next.js Image component (already implemented)
2. **Use WebP Format**: Convert images to WebP for better compression
3. **Lazy Loading**: Images load as you scroll (built-in)
4. **Proper Sizing**: Use appropriate image dimensions

## 🎨 Customization Examples

### Change Filter Labels

Edit the `filters` array in `/sections/work/portfolio-gallery.jsx`:

```javascript
const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'design', label: 'Design Work' },
    // ...
];
```

### Modify Card Hover Effects

Edit `/components/work/portfolio-card.jsx`:

```javascript
hover:translate-y-[-8px] // Change hover lift amount
hover:shadow-3xl // Change shadow intensity
```

### Update Email Form

Edit `/sections/work/work-footer.jsx` to connect to your email service.

## 🐛 Troubleshooting

**Images not showing?**
- Check image paths in `portfolio-data.js`
- Ensure images exist in `/public/assets/portfolio/`
- Verify image file extensions match

**Filters not working?**
- Check category names match exactly
- Ensure `category` field exists in each item

**Modal not opening?**
- Check browser console for errors
- Verify `onImageClick` is properly passed

## 📝 Next Steps

1. Add your portfolio images
2. Update `portfolio-data.js` with your projects
3. Customize colors and styling as needed
4. Test on different screen sizes
5. Deploy and share!

## 🎉 You're All Set!

Visit `/work` to see your new portfolio page in action!

For questions or issues, check the component files for inline comments.
