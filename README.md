# Three.js Slider Website

A minimal, one-page web development showcase tailored for the Pakistani audience. The hero section contains a GPU-accelerated image slider implemented with three.js (plane mesh texture crossfade) and the page includes sections for About, Services, and Contact.

This repository contains:
- index.html — landing page and layout
- css/style.css — responsive styling
- js/main.js — three.js slider logic and initialization
- README.md — this file

## Table of Contents
- Features
- Quick Start (Local)
- Development
- Customizing Images
- Styling & Branding
- Deployment (GitHub Pages)
- Accessibility & Fallback
- Troubleshooting
- Suggested Improvements
- Contributing
- License
- Credits

## Features

- Lightweight, single-page layout in English for Pakistani businesses and agencies.
- three.js-powered hero slider using plane meshes and texture crossfade for smooth GPU transitions.
- Responsive CSS and a dark-themed design suited for tech portfolios.
- Sample images are loaded from Unsplash via CDN; easy to replace with local or hosted images.
- Minimal dependencies — three.js is loaded from a CDN.

## Quick Start (Local)

1. Clone the repository:
   git clone https://github.com/jaffsons/threejs-slider-website.git
   cd threejs-slider-website

2. Serve the site locally (recommended) to avoid CORS and file:// restrictions:
   - Using Python 3:
     python -m http.server 8000
     Open http://localhost:8000

   - Using Node (http-server):
     npx http-server -p 8000
     Open http://localhost:8000

3. Or open index.html directly in a modern browser (may be restricted by some browser security settings).

## Development

- The project uses vanilla HTML/CSS/JS with three.js from CDN.
- Edit files in your favorite code editor. No build step is required.
- Recommended workflow:
  - Create a feature branch: git checkout -b feat/your-feature
  - Make changes and test locally
  - Commit and open a pull request

## Customizing Images

By default, the slider loads three sample images (js/main.js). You can:

- Replace the URLs with externally hosted images (fast to iterate).
- Add local images to an `images/` folder and reference them with relative paths.

Example (local images):
1. Create `images/` and add `slide1.jpg`, `slide2.jpg`, `slide3.jpg`.
2. Update `js/main.js`:
   const images = ['images/slide1.jpg','images/slide2.jpg','images/slide3.jpg'];

Tips:
- Use optimized JPEG or WebP images sized for the hero area to improve performance.
- Consider generating multiple sizes and using srcset-style logic if you switch to an img-based approach.

## Styling & Branding

- Edit `css/style.css` to change colors, typography, spacing, and layout.
- Replace the site title, contact email, and phone in `index.html` to match your brand.
- Add a logo image in the header if desired and update the markup accordingly.

## Deployment (GitHub Pages)

Simple steps to publish via GitHub Pages:
1. In GitHub, go to Settings → Pages.
2. Under "Build and deployment", choose "Source": Branch `main` and folder `/ (root)`.
3. Save. After a few minutes, your site will be available at:
   https://<your-username>.github.io/threejs-slider-website

Alternatives: Netlify, Vercel, Firebase Hosting, S3+CloudFront.

## Accessibility & Fallback

- WebGL is required for the three.js slider. Provide a fallback for non-WebGL environments by:
  - Showing a static hero image (include alt text), and
  - Ensuring critical content (About, Services, Contact) is readable and navigable without the slider.
- Keyboard access: ensure buttons are focusable and usable via keyboard.
- Color contrast: adjust CSS variables to meet contrast requirements for better readability.

## Troubleshooting

- Blank or black slider:
  - Ensure WebGL is enabled and supported in your browser.
  - Open DevTools Console for texture load or WebGL errors.
- Local image loading issues:
  - Serve files over a local server instead of opening via file://
- Slider appears stretched:
  - Ensure the container has correct width/height and the canvas resizes on window resize.

## Suggested Improvements

- Add touch/drag support for mobile (pointer events or Hammer.js).
- Autoplay with pause-on-hover.
- Advanced shader transitions (custom GLSL shaders) for richer effects.
- Add TypeScript + build tooling (Vite) for a modern dev workflow.
- Add unit/visual tests and a CI pipeline to auto-deploy to Pages.

## Contributing

Contributions are welcome. Suggested flow:
1. Fork the repository.
2. Create a branch: git checkout -b feat/your-feature
3. Commit changes and push to your fork.
4. Open a pull request describing the work.

Please include screenshots for visual changes and keep commits focused.

## License

This project does not include a LICENSE file by default. If you want to open-source under MIT, add a LICENSE file with MIT contents.

## Credits & Resources

- three.js — https://threejs.org
- Unsplash — sample images used in the demo
