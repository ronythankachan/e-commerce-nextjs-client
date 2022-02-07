module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "product-details": "1fr 5fr 7fr",
        "product-save": "2fr 1fr",
        "product-page": "1fr 6fr",
      },
    },
  },
  plugins: [],
};
