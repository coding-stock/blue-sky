# Quick Start Guide

Get your Blue Sky website running in 5 minutes!

## Step 1: Install Dependencies

```bash
cd blue-sky-program
npm install
```

This will install all required packages (Next.js, React, TypeScript).

## Step 2: Add Your Images

1. Go to the `public/assets/` folder
2. Add all your images (see ASSETS.md for complete list)

**Essential images needed:**
- Hero background: `3312580.jpg`
- Icons: `next.png`, `menu.png`, `close.png`
- Team photos: `hadadi.JPG`, `sadam.jpg`, `dude.jpg`
- Gallery: 4 program photos
- Decorations: `waves.svg`, `IMG_4895.jpg.jpeg`

## Step 3: Run the Development Server

```bash
npm run dev
```

Visit http://localhost:3000 in your browser!

## Step 4: Test Your Website

Check these features:
- ✅ Navigation menu works
- ✅ Mobile menu opens/closes
- ✅ Images load correctly
- ✅ Smooth scrolling to sections
- ✅ Contact form opens WhatsApp
- ✅ Donate button triggers mobile money

## Step 5: Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## Common Issues

### "Module not found" error
**Solution:** Run `npm install` again

### Images not showing
**Solution:** 
- Check filenames match exactly (case-sensitive!)
- Ensure images are in `public/assets/` folder

### Port 3000 already in use
**Solution:** 
```bash
# Use a different port
npm run dev -- -p 3001
```

### TypeScript errors
**Solution:** TypeScript is strict. Follow the error messages or temporarily:
```json
// In tsconfig.json, set:
"strict": false
```

## Next Steps

1. **Customize Content:**
   - Update team information in `components/Team.tsx`
   - Modify mission points in `components/Mission.tsx`
   - Change contact details in `app/contact/page.tsx`

2. **Update Branding:**
   - Change colors in `app/globals.css` (see `:root` section)
   - Update logo text in `components/Navigation.tsx`

3. **Deploy:**
   - Vercel (recommended): Connect your GitHub repo
   - Netlify: Drag and drop your build folder
   - Any Node.js hosting platform

## File Structure Overview

```
app/
  ├── page.tsx           → Home page
  ├── contact/page.tsx   → Contact page
  └── globals.css        → All styles

components/
  ├── Navigation.tsx     → Header & menu
  ├── Hero.tsx          → Top banner
  ├── Mission.tsx       → Mission boxes
  ├── Team.tsx          → Team profiles
  ├── About.tsx         → About & timeline
  ├── Gallery.tsx       → Photo gallery
  └── Donation.tsx      → Donation section
```

## Help & Support

**Found an issue?**
1. Check ASSETS.md for image requirements
2. Review README.md for detailed documentation
3. Check browser console for errors (F12)

**Need to customize?**
- All styling is in `app/globals.css`
- Content is in individual component files
- Colors are in CSS variables (`:root` section)

## Production Checklist

Before deploying:
- [ ] All images added and loading
- [ ] Contact info updated
- [ ] Donation number verified
- [ ] Tested on mobile device
- [ ] All links working
- [ ] Forms submitting correctly
- [ ] SEO metadata updated (in `app/layout.tsx`)

---

**🎉 You're all set!** Your Blue Sky website is ready to empower youth and build leaders.
