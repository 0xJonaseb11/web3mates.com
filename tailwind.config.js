/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // for App Router
    "./pages/**/*.{js,ts,jsx,tsx}",   // for legacy Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-fast': 'spin 15s linear infinite',
      },
    },
  },
  plugins: [],
};
