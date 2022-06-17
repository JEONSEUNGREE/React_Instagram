// form css 오버라이딩
// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,t s,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require("tailwind-scrollbar"), require('tailwind-scrollbar-hide')],
}
