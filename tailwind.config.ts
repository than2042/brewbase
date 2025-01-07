import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        coffee: {
          light: '#D2B48C',
          DEFAULT: '#6F4E37',
          dark: '#4B2E2A',
        },
      },
      gap: {
        '100': '30rem'
      },
      skew: {
        '90': '90deg',
      }
    },
  },
  plugins: [],
} satisfies Config;
