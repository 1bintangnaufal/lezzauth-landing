import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'lezzindigo': '#4F46E4',
        'lezzborder': 'rgba(78, 90, 133, 0.2)',
        'lezzchia': '#F923E4',
        'ghosthover': 'rgba(78, 90, 133, 0.6)'
      }
    },
  },
  plugins: [],
}
export default config
