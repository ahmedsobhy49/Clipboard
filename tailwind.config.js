/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('../src/bg-header-desktop.png')",
        // "hero-image-sm": "url('../src/bg-header-mobile.png')",
      },
    },
  },
  plugins: [],
};
