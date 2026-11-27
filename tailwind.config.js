/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c67ed',
          50: '#edf4ff',
          100: '#dbe7fe',
          200: '#bfd5fe',
          300: '#93bbfd',
          400: '#6097fa',
          500: '#2c67ed',
          600: '#1e4fd8',
          700: '#193eb0',
          800: '#1a358e',
          900: '#1b3071',
          950: '#111e45',
        },
        space: {
          void: '#02040a',
          dark: '#050814',
          card: '#0a1026',
          border: 'rgba(44, 103, 237, 0.25)',
          glow: 'rgba(44, 103, 237, 0.65)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(44, 103, 237, 0.35)',
        'glow': '0 0 25px rgba(44, 103, 237, 0.5)',
        'glow-lg': '0 0 40px rgba(44, 103, 237, 0.7)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'meteor': 'meteor 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      }
    },
  },
  plugins: [],
}
