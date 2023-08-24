/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1440px",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
