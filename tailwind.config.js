/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "slider-bg": "var(--slider-bg)",
        "slider-bg-before": "var(--slider-bg-before)",
        "pills-bg": "var(--pills-bg)",
      },
    },
  },
  plugins: [],
};
