module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this line correctly points to all your component files
  ],
  theme: {
    extend: {
      height: {
        "screen-50": "50vh", // Ny højde som fylder halvdelen af skærmen
        "screen-65": "65vh",
        "screen-75": "75vh",
      },
      colors: {
        accent: "#4c342b",
        secondary: "#BEA8A7",
        primary: "#C09891",
        background: "#fbf3f3",
        text: "#140400",
      },
      fontFamily: {
        body: ["SUSE", "sans-serif"],
        heading: ["Alkalami", "serif"],
      },
      fontSize: {
        "7xl": "5rem",  // Tilføj 7xl (80px)
        "8xl": "6rem",  // Tilføj 8xl (96px)
      },
    },
  },
  plugins: [],
};
