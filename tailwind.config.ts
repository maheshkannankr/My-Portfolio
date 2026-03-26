import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base palette
        primary: '#FCA311',
        navy: '#14213D',
        light: '#E5E5E5',
        white: '#FFFFFF',
        black: '#000000',

        // Semantic colors (important)
        background: {
          light: '#E5E5E5',
          dark: '#14213D',
        },
        text: {
          primary: '#000000',
          secondary: '#14213D',
          sub: '#6B7280',
          inverse: '#FFFFFF',
        },
      },

      fontFamily: {
        sans: ['var(--font-nunito)', 'sans-serif'],
        display: ['var(--font-tangerine)', 'cursive'],
      },
      keyframes: {
        swipe: {
          '0%': { transform: 'translateY(0px)', opacity: '0' },
          '50%': { transform: 'translateY(24px)', opacity: '1' },
          '100%': { transform: 'translateY(46px)', opacity: '0' },
        },
      },
      animation: {
        swipe: 'swipe 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
