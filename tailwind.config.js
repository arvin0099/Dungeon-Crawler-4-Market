/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs",
  "./public/css/*.js"],
  purge: ['./views/**/*.ejs', './public/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [],
}

