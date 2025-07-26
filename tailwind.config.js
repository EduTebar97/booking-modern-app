module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html" // Make sure to include your index.html if you have styles there
  ],
  theme: {
    extend: {
      colors: {
        gloovePrimary: {
          DEFAULT: "#146b79",
          dark: "#0e505e",
          light: "#b0d4e3",
        },
        glooveSecondary: {
          light: "#f1f5f9",
          DEFAULT: "#c2d3cd",
          dark: "#4A5568",
        },
        glooveText: {
          DEFAULT: "#333333",
          dark: "#ffffff",
        },
        glooveAccent: {
          DEFAULT: "#20a4f3",
          light: "#78c0e0",
          dark: "#1c84d1",
        },
        dark: {
          background: "#1A202C",
          text: "#A0AEC0",
          primary: "#2D3748",
          secondary: "#4A5568",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["'Open Sans'", "sans-serif"], // Note: Open Sans is not in the original imports, you might want to add it
        // You can keep your existing font as well
        // comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
};