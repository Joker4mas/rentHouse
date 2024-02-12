/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      //font-family
      fontFamily :{
        'philo' : ['Philosopher, sans-serif'],
      } 
    },
  },
  plugins: [],
}

