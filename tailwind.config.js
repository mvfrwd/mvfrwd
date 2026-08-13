/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF4B2B',
          'orange-alt': '#FF512F',
          black: '#080808',
          'near-black': '#111111',
          'off-white': '#F7F7F2',
          muted: '#8A8A8A',
          stroke: 'rgba(247, 247, 242, 0.08)',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.02em',
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};