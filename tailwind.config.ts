import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9f6',
          100: '#ccf3ed',
          200: '#99e7db',
          300: '#8ae9d8',
          400: '#66ddc9',
          500: '#4dd4bb',
          600: '#3db199',
          700: '#2e8577',
          800: '#1f5955',
          900: '#0f2c33',
        },
        blue: {
          50: '#e8eaf5',
          100: '#d1d5eb',
          200: '#a3abd7',
          300: '#7581c3',
          400: '#4757af',
          500: '#2f3ea4',
          600: '#263283',
          700: '#1c2562',
          800: '#131942',
          900: '#090c21',
        },
        accent: {
          50: '#e6f9f6',
          100: '#ccf3ed',
          200: '#99e7db',
          300: '#8ae9d8',
          400: '#66ddc9',
          500: '#4dd4bb',
          600: '#3db199',
          700: '#2e8577',
          800: '#1f5955',
          900: '#0f2c33',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

