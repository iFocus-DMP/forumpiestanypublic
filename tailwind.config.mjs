/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0066CC',
          yellow: '#FFCC00',
        },
      },
    },
  },
  plugins: [],
}

