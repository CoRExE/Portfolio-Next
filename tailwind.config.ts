import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-900': '#1a1a1a',
        'base-800': '#2a2a2a',
        'base-700': '#3a3a3a',
        'base-content': '#ffffff',
        'primary': '#ff5722',
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
