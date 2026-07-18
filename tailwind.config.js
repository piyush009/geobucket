/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1C2C",
          soft: "#132A3E",
          muted: "#1A3548",
        },
        teal: {
          DEFAULT: "#1FA6A0",
          light: "#2BC4BC",
          dark: "#17807B",
        },
        sand: {
          DEFAULT: "#E8D5B5",
          light: "#F2E6D0",
        },
        cream: "#F7F5F1",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
