module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this line correctly points to all your component files
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
