# Blue Sky Youth Leadership Program Website

A Next.js website for the Blue Sky Youth Leadership Program, empowering today's youth and building tomorrow's leaders.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- **Smooth Animations**: CSS animations for engaging user experience
- **Mobile Menu**: Interactive mobile navigation menu
- **Contact Integration**: WhatsApp integration for direct messaging
- **Mobile Money**: MTN Mobile Money integration for donations
- **Image Gallery**: Showcase program impact with photo gallery
- **Team Profiles**: Meet the leadership team
- **Timeline**: Visual journey of program milestones

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd blue-sky-program
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add images to the assets folder:**
   
   Place the following images in the `public/assets/` directory:

   **Required Images:**
   - `3312580.jpg` - Hero background image
   - `next.png` - Arrow icon for buttons
   - `menu.png` - Mobile menu icon
   - `close.png` - Close icon for mobile menu
   - `waves.svg` - Wave decoration for about section
   - `IMG_4895.jpg.jpeg` - Mission section background
   
   **Team Photos:**
   - `hadadi.JPG` - Kaitale Hadadi (Founder)
   - `sadam.jpg` - Sadam Kaitale Mulumba (Co-Founder)
   - `dude.jpg` - Nkurunziza Ronaldo (Executive Director)
   
   **Gallery Images:**
   - `IMG_20260131_091814_111.jpg.jpeg`
   - `IMG_4900.jpg.jpeg`
   - `IMG_4950.jpg.jpeg`
   - `image.jpg`

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
blue-sky-program/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── About.tsx              # About section with timeline
│   ├── Donation.tsx           # Donation section
│   ├── Gallery.tsx            # Image gallery
│   ├── Hero.tsx               # Hero section
│   ├── Loading.tsx            # Loading screen
│   ├── Mission.tsx            # Mission section
│   ├── Navigation.tsx         # Navigation component
│   └── Team.tsx               # Team section
├── public/
│   └── assets/                # Images and media files
├── package.json
├── tsconfig.json
└── next.config.js
```

## Key Features Explained

### Navigation
- Desktop and mobile-friendly navigation
- Smooth scroll to sections
- Mobile menu with slide-in animation

### Contact Form
- WhatsApp integration for direct messaging
- Form validation
- Responsive design

### Donations
- MTN Mobile Money integration
- Direct USSD code dialing for donations
- Phone number: 0732506821

### Animations
- Scroll-triggered animations
- Smooth transitions
- Loading screen with spinner

## Customization

### Colors
The color scheme can be customized in `app/globals.css`:

```css
:root {
  --color: #f3cd8e;
  --purple: rgb(80, 39, 80);
  --background: #f9f9f9;
}
```

### Contact Information
Update contact details in `app/contact/page.tsx`:
- Email
- Phone number
- WhatsApp number

### Donation Phone Number
Update in `components/Donation.tsx`:
```typescript
const convert = encodeURIComponent("*182*1*2*YOUR_NUMBER#")
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **React 18**: UI library
- **CSS3**: Styling with modern features including scroll-triggered animations

## Contributing

This is a project for Blue Sky Youth Leadership Program. For contributions or suggestions, please contact the team.

## Contact

- **Email**: blueskyprogram@gmail.com
- **Phone**: +250 732 506 821
- **Location**: Kigali, Rwanda

## License

© 2025 Blue Sky Youth Leadership Program. All rights reserved.
