/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'space': {
          900: '#0a0b1e',
          800: '#1a1b3a',
          700: '#2a2d5f'
        },
        'cosmic': {
          purple: '#6366f1',
          violet: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          neon: '#00d4aa'
        },
        'light': {
          text: '#212529',
          subtext: '#6c757d',
          bg: '#f8f9fa',
          card: '#ffffff'
        }
      }
    }
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'img, video, canvas, audio, iframe, embed, object': {
          display: 'inline-block',
          verticalAlign: 'middle'
        },
        'select, input, textarea, button': {
          appearance: 'none',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none'
        }
      })
    }
  ]
}