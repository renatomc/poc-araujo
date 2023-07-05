/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },
      colors: {
        background: {
          primary: '#FFFFFF',
          secondary: '#8E8E8E',
        },
        input_bg: {
          primary: '#F0F0F0',
        },
        button: {
          primary: '#003A74',
          secondary: '#FFFFFF',
        },
        button_text: {
          primary: '#FFFFFF',
          secondary: '#424242',
        },
        button_border: {
          secondary: '#D6DADA',
        },
        text: {
          primary: '#000000',
          secondary: '#424242',
        },
        footer: {
          primary: '#F0F0F0',
        },
      },
    },
  },
  plugins: [],
}
