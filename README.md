# AstriOrb - Product Development Company Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring smooth animations, dark mode, and an innovative design.

## 🚀 Features

- ⚡ Lightning-fast performance with Vite
- 🎨 Beautiful animations with Framer Motion
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ♿ Accessibility-focused (WCAG compliant)
- 🎯 Custom cursor for desktop
- 📧 Contact form with EmailJS integration
- 🔒 Input sanitization for security
- 🎭 Error boundaries for graceful error handling

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository or extract the zip file
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Add your EmailJS credentials to the `.env` file:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/       # React components
├── contexts/        # React context providers
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
│   ├── animations.js    # Framer Motion variants
│   ├── constants.js     # App constants
│   └── sanitize.js      # Input sanitization
└── index.css        # Global styles
```

## 🎨 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **HTTP Client:** Axios

## 🔒 Security Features

- Input sanitization for all form submissions
- Environment variables for sensitive data
- XSS protection
- Error boundaries for graceful error handling

## ♿ Accessibility

- ARIA labels for interactive elements
- Skip to content link for keyboard navigation
- Semantic HTML structure
- Screen reader friendly
- Keyboard navigation support

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

All rights reserved © 2025 AstriOrb Pvt. Ltd.

## 📈 SEO & Analytics

This project includes:
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt for crawler control
- ✅ Structured data (JSON-LD) for rich snippets
- ✅ Plausible Analytics (privacy-friendly)
- ✅ Open Graph tags for social sharing
- ✅ Optimized meta tags

**See SEO_SETUP_GUIDE.md for complete setup instructions.**

## 🤝 Contributing

This is a private project. For inquiries, contact: astriorbofficial@gmail.com

---

Built with ❤️ by AstriOrb Team