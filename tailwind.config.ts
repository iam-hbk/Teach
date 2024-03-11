import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "700px": "700px",
      },
      colors:{
        "teaching":"#0553B6"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c2410c",
          secondary: "#5b21b6",
          accent: "#111827",
          neutral: "#0b080c",
          "base-100": "#f2f1f1",
          info: "#0068ff",
          success: "#15803d",
          warning: "#ff7300",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
