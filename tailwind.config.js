/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'bg-image': "url('image/bg.jpg')",
        }
      },
    },
    plugins: [],
  }