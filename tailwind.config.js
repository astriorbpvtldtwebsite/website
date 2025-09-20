/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'space': {
          900: '#0a0b1e',
          800: '#1a1b3a',
          700: '#2a2d5f',
        },
        'cosmic': {
          purple: '#6366f1',
          violet: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          neon: '#00d4aa',
        },
        'light': {
          'bg': '#f8f9fa',
          'card': '#ffffff',
          'text': '#212529',
          'subtext': '#6c757d',
        }
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #0a0b1e 0%, #1a1b3a 50%, #2a2d5f 100%)',
        'gradient-neon': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #00d4aa 100%)',
        'gradient-purple': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
