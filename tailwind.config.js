/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        slideIn: {
          from: { opacity: 0, transform: "translate(-50%, -10px)" },
          to: { opacity: 1, transform: "translate(-50%, 0)" },
        },
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        slideIn: "slideIn 0.1s ease-out",
      },
    },
  },
  plugins: [],
};
