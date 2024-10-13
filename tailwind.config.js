/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "white",
        foreground: "black",
        'pastel-pink': '#f8c5c5',
        'pastel-purple': '#d1c4e9',
        'pastel-green': '#c5e1a5',
      },
      keyframes: {
        'scroll-reveal': {
          '0%': { backgroundSize: '0% 100%' },
          '100%': { backgroundSize: '100% 100%' },
        },
        // You can also add any other keyframes here
      },
      animation: {
        'scroll-reveal': 'scroll-reveal 1s ease-in-out forwards',
        // Define more animations if needed
      },
    },
  },
  plugins: [],
};
