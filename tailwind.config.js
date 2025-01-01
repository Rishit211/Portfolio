/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      animation: {
        'gradient-rotate': 'gradientRotate 5s linear infinite', // Add gradient animation
      },
      keyframes: {
        gradientRotate: {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
  },
},
  plugins: [],
};