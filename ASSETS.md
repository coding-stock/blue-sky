# Required Assets

This document lists all the images and media files you need to add to the `public/assets/` directory.

## Directory Structure

All files should be placed directly in the `public/assets/` folder:

```
public/
└── assets/
    ├── 3312580.jpg
    ├── next.png
    ├── menu.png
    ├── close.png
    ├── waves.svg
    ├── IMG_4895.jpg.jpeg
    ├── hadadi.JPG
    ├── sadam.jpg
    ├── dude.jpg
    ├── IMG_20260131_091814_111.jpg.jpeg
    ├── IMG_4900.jpg.jpeg
    ├── IMG_4950.jpg.jpeg
    └── image.jpg
```

## Image Requirements

### Hero Section
| Filename | Description | Recommended Size | Usage |
|----------|-------------|------------------|-------|
| `3312580.jpg` | Hero background image | 1920x1080px | Header background |
| `next.png` | Arrow/next icon | 40x40px | Button decoration |

### Navigation
| Filename | Description | Recommended Size | Usage |
|----------|-------------|------------------|-------|
| `menu.png` | Hamburger menu icon | 30x30px | Mobile menu button |
| `close.png` | Close/X icon | 40x40px | Mobile menu close |

### Decorative Elements
| Filename | Description | Format | Usage |
|----------|-------------|--------|-------|
| `waves.svg` | Wave pattern | SVG | About section separator |

### Mission/Skills Section
| Filename | Description | Recommended Size | Usage |
|----------|-------------|------------------|-------|
| `IMG_4895.jpg.jpeg` | Background image | 1200x800px | Skills section background |

### Team Photos
| Filename | Description | Recommended Size | Person |
|----------|-------------|------------------|--------|
| `hadadi.JPG` | Professional headshot | 300x300px | Kaitale Hadadi (Founder) |
| `sadam.jpg` | Professional headshot | 300x300px | Sadam Kaitale Mulumba (Co-Founder) |
| `dude.jpg` | Professional headshot | 300x300px | Nkurunziza Ronaldo (Executive Director) |

### Gallery Images
| Filename | Description | Recommended Size | Caption |
|----------|-------------|------------------|---------|
| `IMG_20260131_091814_111.jpg.jpeg` | Program activity photo | 400x300px | "Leadership Begins With a Voice" |
| `IMG_4900.jpg.jpeg` | Program activity photo | 400x300px | "Knowledge That Builds Confidence" |
| `IMG_4950.jpg.jpeg` | Program activity photo | 400x300px | "Leadership is a Journey, Not a Title" |
| `image.jpg` | Program activity photo | 400x300px | "Collaboration Creates Strong Leaders" |

## Image Guidelines

### Format
- Use `.jpg` or `.jpeg` for photos
- Use `.png` for icons with transparency
- Use `.svg` for vector graphics

### Optimization
- Compress images before uploading to reduce file size
- Recommended tools: TinyPNG, ImageOptim, or Squoosh
- Target file size: under 500KB for photos, under 50KB for icons

### Naming Convention
- Keep original filenames as listed above for compatibility
- Files are case-sensitive (`hadadi.JPG` ≠ `hadadi.jpg`)

## Adding Images

1. Collect all required images
2. Rename them to match the filenames listed above (case-sensitive!)
3. Place them in the `public/assets/` directory
4. Verify all images are in place before running the development server

## Troubleshooting

**Image not showing?**
- Check filename matches exactly (including case)
- Ensure image is in `public/assets/` directory
- Clear browser cache and reload
- Check browser console for 404 errors

**Wrong image displayed?**
- Verify you're using the correct filename
- Check if there are duplicate files

## Notes

- The `public/assets/` directory is accessible from the browser at `/assets/`
- Images in `public/` folder don't need to be imported
- Next.js Image component automatically optimizes images
