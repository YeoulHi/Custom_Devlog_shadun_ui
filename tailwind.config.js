/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          text: '#101518',
          background: '#ffffff',
        },
        secondary: {
          text: '#5c748a',
          background: '#eaedf1',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
      },
    },
  },
  plugins: [],
} 