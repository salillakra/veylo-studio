import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#080808',
        paper: '#F1F0EB',
        lime: '#C6FF4D',
      },
    },
  },
  plugins: [],
}

export default config
