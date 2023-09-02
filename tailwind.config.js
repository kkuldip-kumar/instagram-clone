/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "node_modules/preline/dist/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        gray: "var(--gray-color)",
      },
      boxShadow: {
        base: "0px_0px_3px_rgba(3,102,214,0.3",
      },
      aspectRatio: {
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
