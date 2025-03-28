/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0f5ff",
          100: "#e6edff",
          200: "#c3dafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        secondary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          500: "#6366f1",
          600: "#4f46e5",
        },
      },
      boxShadow: {
        custom: "0 10px 25px rgba(0, 0, 0, 0.1)",
        hover: "0 15px 35px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": { "background-position": "center top" },
          "50%": { "background-position": "center bottom" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "left center" },
          "50%": { "background-position": "right center" },
        },
        "gradient-xy": {
          "0%, 100%": { "background-position": "left top" },
          "50%": { "background-position": "right bottom" },
        },
      },
    },
  },
  plugins: [],
};
