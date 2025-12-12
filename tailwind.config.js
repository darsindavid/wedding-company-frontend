/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#15313D',
          light: '#2B7A9B',
          accent: '#3CABDA',
        },
        secondary: {
          light: '#C6E9F7',
          lighter: '#E5F8FF',
          border: '#96E5FF',
        },
        background: {
          gradient1: '#B6CFEE',
          gradient2: '#71C6E2',
          gradient3: '#D9F4FA',
          inner: '#F4FDFF',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 20px 60px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 12px rgba(60, 171, 218, 0.3)',
      }
    },
  },
  plugins: [],
}