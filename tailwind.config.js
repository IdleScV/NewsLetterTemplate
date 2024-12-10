/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        current: {
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'theme-blue',
    'theme-purple',
    'theme-green',
    'theme-rose',
    {
      pattern: /bg-(blue|purple|green|rose)-(100|400|500|600|700|800|900)/,
      variants: ['hover', 'dark', 'dark:hover'],
    },
    {
      pattern: /text-(blue|purple|green|rose)-(400|500|600|700|800)/,
      variants: ['dark'],
    },
    {
      pattern: /ring-(blue|purple|green|rose)-(400|500)/,
    },
  ],
};