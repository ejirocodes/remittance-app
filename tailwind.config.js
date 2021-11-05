module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: (theme) => ({
        ...theme('colors'),
        pri: '#F5A522',
        sec: '#23D3C5',
        dark: '#333',
        light: '#F7FBFC',
      }),
      backgroundColor: (theme) => ({
        ...theme('colors'),
        pri: '#F5A522',
        sec: '#23D3C5',
        dark: '#333',
        light: '#F7FBFC',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
