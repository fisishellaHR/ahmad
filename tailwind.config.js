/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px 0px #00000040",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#FF8400",
        secondary: "#6B7280",
      },
      fontSize: {
        "15px": ["15px", "22.5px"], // font-size: 15px; line-height: 22.5px;
        "14px": ["15px", "20px"], // font-size: 15px; line-height: 22.5px;
        "10px": ["10px", "15px"], // font-size: 10px; line-height: 15px;
        "18px": ["17px", "27px"], // font-size: 10px; line-height: 15px;
        "30px": ["30px", "37px"], // font-size: 10px; line-height: 15px;
        "24px": ["24px", "31px"], // font-size: 10px; line-height: 15px;
      },
    },
  },
  plugins: [],
};
