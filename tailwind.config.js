module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '10%': { opacity: '0.9' },
          '20%': { opacity: '0.8' },
          '30%': { opacity: '0.7' },
          '40%': { opacity: '0.6' },
          '50%': { opacity: '0.5' },
          '60%': { opacity: '0.4' },
          '70%': { opacity: '0.3' },
          '80%': { opacity: '0.2' },
          '90%': { opacity: '0.1' },
          '100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '10%': { opacity: '0.1' },
          '20%': { opacity: '0.2' },
          '30%': { opacity: '0.3' },
          '40%': { opacity: '0.4' },
          '50%': { opacity: '0.5' },
          '60%': { opacity: '0.6' },
          '70%': { opacity: '0.7' },
          '80%': { opacity: '0.8' },
          '90%': { opacity: '0.9' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-out': 'fadeOut 3s ease-in-out',
        'fade-in': 'fadeIn 3s ease-in-out',  // Added fade-in animation
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
