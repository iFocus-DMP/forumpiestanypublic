/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: '#0066CC',
          'blue-50': '#E6F0FA',
          'blue-100': '#CCE1F5',
          'blue-600': '#0052A3',
          'blue-900': '#002952',
          yellow: '#FFCC00',
          'yellow-100': '#FFF5CC',
        },
      },
    },
  },
  plugins: [],
}

