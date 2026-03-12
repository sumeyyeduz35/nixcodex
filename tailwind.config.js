/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: "#7C3AED",
        secondary: "#EC4899",

        darkbg: "#0F172A",
        cardbg: "#1E293B",

        textmain: "#F8FAFC",
        textsecondary: "#94A3B8"

      }
    }
  },
  plugins: [],
}