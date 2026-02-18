# Martina's 15th Birthday Landing Page

A modern, elegant, and fully responsive invitation landing page for a 15th birthday celebration, built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Mobile First & Responsive:** Optimized for all devices (mobile, tablet, desktop, iPad).
- **Minimalist & Elegant Design:** Clean layout, clear visual hierarchy, no rounded corners, and subtle animations.
- **Centralized Configuration:** All texts, images, colors, and data are managed from `src/config.js` for easy customization and scalability.
- **Modern UI:** Uses Montserrat and Corinthia fonts, with a consistent color palette and beautiful section transitions.
- **Animated Loader & Sections:** Smooth entrance animations with Framer Motion.
- **Gallery Carousel:** Responsive image carousels with autoplay and captions.
- **Countdown Timer:** Animated countdown to the event date.
- **Event Info & Location:** Date, time, and Google Maps integration.
- **Dress Code:** Visual and textual dress code guidance.
- **Gift Section:** Modal with bank details and copy-to-clipboard functionality.
- **RSVP & Song Request:** WhatsApp integration for attendance confirmation and song suggestions.
- **Custom SVG Icons:** Animated icons for crown, heart, music, and more.
- **Footer:** Discreet, professional, and fully responsive.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [react-icons](https://react-icons.github.io/react-icons/)

## Project Structure

```
src/
  components/        # All React components (Loader, Hero, Countdown, Gallery, etc.)
  assets/            # Images, GIFs, and audio files
  config.js          # Centralized configuration for all content and assets
  index.css          # Tailwind base styles
  main.jsx           # App entry point
App.jsx              # Main app layout and section order
```

## Customization

- **All content, images, and colors are managed in `src/config.js`.**
- To update event details, images, or texts, simply edit the relevant section in `config.js`.
- To change the gallery, update the image paths in `galleryConfig1` and `galleryConfig2`.
- To update the RSVP or song request WhatsApp number/message, edit `rsvpConfig` and `songConfig`.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the landing page.

## Deployment

- Build for production:
  ```bash
  npm run build
  ```
- Preview the production build:
  ```bash
  npm run preview
  ```

## Credits

- Design & Development: [Tobías Santellán](https://www.linkedin.com/in/tobias-s98/)
- Built with React, Vite, Tailwind CSS, and Framer Motion.

---

For any questions or customizations, feel free to contact me via LinkedIn or WhatsApp (see footer of the landing page).
