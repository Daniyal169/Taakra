/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS and TS files in the src directory
  ],
  theme: {
    extend: {
      width: {
        '112': '28rem', // 448px
        '128': '32rem', // 512px
      },
    },
  },
  plugins: [],
}
