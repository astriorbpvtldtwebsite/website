# Quick Start Guide

## ⚡ Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your EmailJS credentials
# Get them from: https://www.emailjs.com/
```

### 3. Run the Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

---

## 🔑 Important Files

### Environment Variables (`.env`)
```env
VITE_EMAILJS_PUBLIC_KEY=your_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

**⚠️ Never commit the `.env` file to Git!**

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` → `theme.extend.colors`

### Change Animations
Edit `src/utils/constants.js` → `ANIMATION_DURATION`

### Change Particle Count
Edit `src/utils/constants.js` → `PARTICLE_COUNT`

### Change Preloader Duration
Edit `src/utils/constants.js` → `PRELOADER_DURATION`

---

## 🐛 Troubleshooting

### Issue: "Module not found"
**Solution:** Run `npm install`

### Issue: "Environment variables not working"
**Solution:** 
1. Make sure `.env` file exists in root directory
2. Restart the dev server
3. Variables must start with `VITE_`

### Issue: "EmailJS not sending emails"
**Solution:**
1. Check your EmailJS credentials in `.env`
2. Verify your EmailJS service is active
3. Check browser console for errors

### Issue: "Site is slow"
**Solution:**
1. Reduce particle counts in `src/utils/constants.js`
2. Disable custom cursor on mobile (already done)
3. Check browser DevTools Performance tab

---

## 📱 Browser Support

✅ Chrome (latest)
✅ Firefox (latest)  
✅ Safari (latest)
✅ Edge (latest)

---

## 🔒 Security Checklist

- [x] Environment variables configured
- [x] `.env` in `.gitignore`
- [x] Input sanitization enabled
- [x] No console.log in production
- [x] Error boundaries in place

---

## ♿ Accessibility Features

- ✅ Skip to content link
- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Focus management in modals
- ✅ Screen reader friendly

---

## 📞 Support

**Email:** astriorbofficial@gmail.com
**Website:** https://astriorb.com

---

## 🚀 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Vercel
1. Import your repository
2. Framework preset: Vite
3. Add environment variables in Vercel dashboard

---

**Happy Coding! 🎉**
