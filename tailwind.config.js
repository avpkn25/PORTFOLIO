/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        preahvihear: ["Preahvihear", "sans-serif"],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        morphing: {
          '0%, 100%': {
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          },
          '50%': {
            borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
          },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        morphing: 'morphing 10s infinite',
      }
    },
  },
  plugins: [],
}