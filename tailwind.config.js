/** @type {import('tailwindcss').Config} */
module.exports = {
  // *== star sary folder jin ki extension html hai un sab pe apply ho jye ga
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily:{
        shams: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}

// fontFamily : {
//   poppin : ["Merriweather", "serif"]
// }