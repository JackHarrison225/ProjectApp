/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradient-sky":"radial-gradient(circle at 10% 20%, rgb(215, 223, 252) 0%, rgb(255, 255, 255) 0%, rgb(215, 223, 252) 84%)",

      },
      colors: {
        "ecru":"#d6ba73",
        "gunmetal": "#292f36",
        "robinblue":"#4ecdc4",
        "mintcream":"#f7fff7",
        "lightred":"#ff6b6b",
        "naplesyellow":"#ffe66d",


        "antiflash-white": "#eef0f2",
        "onyx": "#353b3c",
        "silver": "#c6c7c4",
        "rosetaupe":"#846a6a",
        "rosequartz":"#a2999e"
      }
    },
  },
  plugins: [],
};
