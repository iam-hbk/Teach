import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f97316",
          secondary: "#4c1d95",
          accent: "#f3f4f6",
          neutral: "#181c25",
          "base-100": "#fbf9fb",
          info: "#80d7f5",
          success: "#188142",
          warning: "#f0922d",
          error: "#f4352f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
