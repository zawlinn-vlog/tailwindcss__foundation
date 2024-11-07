/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        myfont: [
          "200px",
          {
            // lineHeight: "3rem",
            fontWeight: "900",
          },
        ],
      },
    },
  },
  plugins: [],
};
