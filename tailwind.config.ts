import type { Config } from 'tailwindcss'
import 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // --- THIS IS THE BLOCK YOU NEED TO ADD ---
      keyframes: {
        'slide-down-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        }
      },
      animation: {
        'slide-down-fade-in': 'slide-down-fade-in 0.3s ease-out',
        'shake': 'shake 0.5s ease-in-out',
      }
      // --- END OF YOUR CUSTOM BLOCK ---
    },
  },
  plugins: [],
}
export default config