const colors = require("tailwindcss/colors");

module.exports = {
  content: ["../*.{html,js}"],
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      slate: colors.slate,
      current: "currentColor",
      pink: "#fac8c9",
      offwhite: "#f1f0f0",
      link: "#80060A",
    },
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        "open-sans": ['"Open Sans"', "sans-serif"],
        "josefin-sans": ['"Josefin Sans"', "sans-serif"],
        "ibm-plex-sans": ['"IBM Plex Sans"', "sans-serif"],
      },
    },
  },
};
