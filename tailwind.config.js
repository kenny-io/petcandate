module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
            colors: {
        appaccent: "#FF897B",
        appaccentdark: "#FF5E5E",
        ecllipse: "#FAF3E780",
        ecllipsedark: "#FF702E80",
        card: "#DF3629",
        card2: "#EA6B24",

      },
      fontFamily: {
        pumpkin: ['"Pumpkin Story"', "cursive"],
        adelia: ["ADELIA", "cursive"],
        sfpro: ['"SF Pro"', "sans-serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
