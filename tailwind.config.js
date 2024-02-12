/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-sm": "url('../images/bg-header-mobile.png')",
        "hero-image-lg": "url('../images/bg-header-desktop.png')",
      },
    },
  },
  plugins: [],
};
