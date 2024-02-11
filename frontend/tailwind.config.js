/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    inset: {
      "6px": "6px",
      // full: "100%",
    },
    colors: {
      "first-color": "#fff",
      "second-color": "#40A2E3",
      "third-color": "#B9B4C7",
      "cushion-color": "#eee",
      "black-color": "rgb(0 0 0)",
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [],
};
