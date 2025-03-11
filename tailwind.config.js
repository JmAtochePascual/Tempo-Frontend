/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#30ff9a",
      },
      backgroundColor: {
        primary: "#30ff9a",
        primaryHover: "#25c577",
      },
      backgroundImage: {
        login: "url('/Login-img.jpg')",
        register: "url('/Register-img.jpg')",
      },
    },
  },
  plugins: [],
};
