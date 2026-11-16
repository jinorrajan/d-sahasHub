import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: "#AE282E",
          "crimson-dark": "#8C1F24",
          "crimson-light": "#C9373E",
          orange: "#F06321",
          "orange-dark": "#D45215",
          "orange-light": "#FF7B3D",
          navy: "#004A7F",
          "navy-dark": "#00365D",
          "navy-light": "#0A5F9E",
          sand: "#FBF9F6",
          "sand-dark": "#F3EFE9",
          card: "#FFFFFF",
          muted: "#6B7280",
          heading: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-poppins)", "sans-serif"],
        kicker: ["var(--font-cinzel)", "serif"],
      },
      boxShadow: {
        soft: "0 4px 25px -4px rgba(0, 0, 0, 0.06), 0 2px 10px -2px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -5px rgba(0, 74, 127, 0.08)",
        "card-hover": "0 20px 40px -10px rgba(174, 40, 46, 0.15)",
        glow: "0 0 30px rgba(240, 99, 33, 0.35)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

