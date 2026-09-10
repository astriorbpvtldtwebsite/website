/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // User Defined Color System & Hybrid Harmony
        // Dark Palettes: #EEEEEE, #EA9216, #3A4750, #313831 | #F9F9F9, #004E72, #093634, #FF6E42
        // Light Palette: #F1ECE6, #DDD5CD, #7D4047, #2E2E2E

        // Signature Warm & Electric Flame Accents
        'flame': {
          DEFAULT: '#EA9216',
          amber: '#EA9216',
          coral: '#FF6E42',
          glow: 'rgba(234, 146, 22, 0.25)',
          coralGlow: 'rgba(255, 110, 66, 0.25)',
        },

        // Dark Hybrid Bases & Steels
        'abyss': {
          950: '#071616',
          900: '#093634',
          850: '#0f2425',
          800: '#19282b',
        },
        'steel': {
          DEFAULT: '#3A4750',
          dark: '#313831',
          light: '#4b5a65',
        },
        'ocean': {
          DEFAULT: '#004E72',
          deep: '#003a55',
          light: '#026796',
        },

        // Light Palette
        'sand': {
          DEFAULT: '#F1ECE6',
          light: '#F8F5F1',
          border: '#DDD5CD',
          plum: '#7D4047',
          charcoal: '#2E2E2E',
        },

        // Direct Theme Aliases for universal reactivity
        'citron': {
          DEFAULT: '#EA9216',
          hover: '#FF6E42',
          light: '#fba738',
          glow: 'rgba(234, 146, 22, 0.25)',
          dim: 'rgba(234, 146, 22, 0.08)',
        },
        'obsidian': '#071616',
        'carbon': '#093634',
        'titanium': {
          DEFAULT: '#3A4750',
          950: '#061314',
          900: '#0a1a1b',
          850: '#112224',
          800: '#1d2c2f',
          700: '#3A4750',
          600: '#475661',
          500: '#60727e',
          400: '#8c9ea8',
          300: '#b8c7cf',
          200: '#dae3e8',
          100: '#EEEEEE',
          50: '#F9F9F9',
        },
        'laser': {
          cyan: '#004E72',
          blue: '#00628f',
          emerald: '#093634',
          amber: '#EA9216',
          coral: '#FF6E42',
        },
        'tech': {
          950: '#071616',
          900: '#093634',
          850: '#102224',
          800: '#1c2c2f',
          700: '#3A4750',
          600: '#485661',
          500: '#71818d',
          400: '#9cb0bd',
          300: '#c5d3dc',
          200: '#e5ecf0',
          100: '#EEEEEE',
          50: '#F9F9F9',
        },
        'brand': {
          amber: '#EA9216',
          coral: '#FF6E42',
          ocean: '#004E72',
          petrol: '#093634',
          slate: '#3A4750',
          forest: '#313831',
          plum: '#7D4047',
          charcoal: '#2E2E2E',
          citron: '#EA9216',
          blue: '#004E72',
          cyan: '#FF6E42',
        },
        'light': {
          'bg': '#F1ECE6',
          'card': '#FFFFFF',
          'surface': '#fbf9f6',
          'text': '#2E2E2E',
          'subtext': '#5c5652',
          'border': '#DDD5CD',
          'plum': '#7D4047',
        }
      },
      backgroundImage: {
        'gradient-flame': 'linear-gradient(135deg, #EA9216 0%, #FF6E42 100%)',
        'gradient-hybrid-dark': 'linear-gradient(135deg, #071616 0%, #093634 50%, #3A4750 100%)',
        'gradient-citron': 'linear-gradient(135deg, #EA9216 0%, #FF6E42 100%)',
        'gradient-monolith': 'linear-gradient(180deg, rgba(58, 71, 80, 0.8) 0%, rgba(9, 54, 52, 0.95) 100%)',
        'gradient-tech': 'linear-gradient(135deg, #071616 0%, #093634 50%, #3A4750 100%)',
        'gradient-accent': 'linear-gradient(135deg, #EA9216 0%, #FF6E42 100%)',
        'gradient-card-dark': 'linear-gradient(180deg, rgba(29, 44, 47, 0.7) 0%, rgba(10, 26, 27, 0.9) 100%)',
        'gradient-card-light': 'linear-gradient(180deg, #FFFFFF 0%, #F1ECE6 100%)',
        'gradient-neon': 'linear-gradient(135deg, #EA9216 0%, #FF6E42 100%)',
        'gradient-purple': 'linear-gradient(135deg, #EA9216 0%, #FF6E42 100%)',
        'gradient-cosmic': 'linear-gradient(180deg, #071616 0%, #0a1a1b 100%)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'reticle-spin': 'reticleSpin 20s linear infinite',
        'reticle-spin-reverse': 'reticleSpinReverse 25s linear infinite',
        'laser-sweep': 'laserSweep 2.5s ease-in-out infinite',
        'radar-ping': 'radarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(234, 146, 22, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(255, 110, 66, 0.4)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        reticleSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        reticleSpinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        laserSweep: {
          '0%': { top: '0%', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        radarPing: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
