/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "false",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    container: {
      center: true,
    },
    extend: {
      backgroundClipText: ["hover", "focus"],
      textTransparent: ["hover", "focus"],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        basic: "#003E48",
        primary: "#4FA0AE",
        secondary: "#FEB101",
        sub: "#7E7E7E",
        cgray: "#487A81",
      },

      backgroundImage: {
        hero: "url('/hero.svg')",
        curve: "url('/curve.svg')",
        noise: "url('/noise.svg')",
        wave: "url('/waves.svg')",
        lines: "url('/bg-3.svg')",
        lines2: "url('/bg-4.svg')",
        footer1: "url('/footer-1.svg')",
      },

      fontFamily: {
        hero: ["HvDTrial Brandon Grotesque", "sans-serif"],
        stark: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
