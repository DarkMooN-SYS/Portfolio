# React Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- ✅ Multi-page navigation with React Router
- ✅ Home page with hero section and featured projects
- ✅ About page with skills and experience
- ✅ Projects showcase with filtering
- ✅ Contact form with validation
- ✅ Fully responsive design
- ✅ Smooth animations and transitions
- ✅ Modern gradient design
- ✅ SEO friendly structure

## Pages

- **Home** - Hero section, featured projects, and skills overview
- **About** - About you, statistics, technical skills by category
- **Projects** - Complete portfolio of your projects with descriptions
- **Contact** - Contact form and contact information

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Build

To create a production build:
```bash
npm run build
```

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --dark-color: #1f2937;
    --light-color: #f9fafb;
    --text-color: #374151;
}
```

### Content
- Update the project list in `src/pages/Projects.jsx`
- Modify About section in `src/pages/About.jsx`
- Update contact info in `src/pages/Contact.jsx`
- Change navbar branding in `src/components/Navbar.jsx`

## Tech Stack

- React 18
- Vite
- React Router v6
- CSS3 with Grid and Flexbox
- JavaScript ES6+

## License

This project is open source and available under the MIT License.
