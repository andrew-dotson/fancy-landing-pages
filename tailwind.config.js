/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
        display: ["degular-display", "sans-serif"],
        heading: ["degular-text", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        xl: ["1.125rem", "120%"], //18px
        "2xl": ["1.5rem", "120%"], //24px
        "3xl": ["2rem", "120%"], //32px
        "4xl": ["2.25rem", "120%"], //36px
        "5xl": ["3rem", "120%"], //48px
        "6xl": ["3.5rem", "100%"], //56px
        "7xl": ["4rem", "100%"], //64px
        "7.5xl": ["5rem", "90%"], //80px
        "8xl": ["6.25rem", "90%"], //100px
        "9xl": ["7.5rem", "90%"], //120px
        "10xl": ["9.25rem", "90%"], //148px
      },
      backgroundImage: {
        "hero-pattern": "url('../img/patterns/pattern-light.png')",
        "hero-pattern-dark": "url('../img/patterns/pattern-dark.png')",
      },
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
