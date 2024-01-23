/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-23': '#eff1f4',
      },
    },
  },
  plugins: [],
  corePlugins:{
    preflight:false,
    },
}

