import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1E5631',
          gold: '#D4A017',
          gray: '#333333'
        }
      },
      boxShadow: {
        soft: '0 18px 45px rgba(30, 86, 49, 0.14)'
      },
      backgroundImage: {
        hero: 'linear-gradient(180deg, rgba(30,86,49,0.76), rgba(0,0,0,0.6)), radial-gradient(circle at top, rgba(212,160,23,0.12), transparent 45%)'
      }
    }
  },
  plugins: []
};

export default config;
