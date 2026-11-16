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
        wedding: {
          green: {
            DEFAULT: "#174D36",
            deep: "#0E3324",
            dark: "#082117",
            light: "#256B4D",
            soft: "#E8F0EC",
          },
          orange: {
            DEFAULT: "#E66C32",
            warm: "#F0854A",
            deep: "#C4521E",
            soft: "#FDF2EC",
          },
          ivory: {
            DEFAULT: "#F5EBDD",
            light: "#FAF5EE",
            warm: "#EFE3D0",
            dark: "#E2D3BD",
          },
          gold: {
            DEFAULT: "#C6A45A",
            bright: "#DFBE72",
            dark: "#9B7E3E",
            metallic: "#D4AF37",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Didot", "serif"],
        script: ["var(--font-alex-brush)", "cursive"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        envelope: "0 25px 50px -12px rgba(14, 51, 36, 0.25)",
        seal: "0 8px 24px rgba(230, 108, 50, 0.4)",
        card: "0 20px 40px -15px rgba(23, 77, 54, 0.15)",
        gold: "0 10px 25px -5px rgba(198, 164, 90, 0.35)",
      },
      backgroundImage: {
        "gold-shimmer": "linear-gradient(135deg, #C6A45A 0%, #F5E5BE 50%, #C6A45A 100%)",
        "green-gradient": "linear-gradient(180deg, #174D36 0%, #0E3324 100%)",
        "ivory-radial": "radial-gradient(circle at center, #FAF5EE 0%, #F5EBDD 100%)",
        "orange-sunset": "linear-gradient(135deg, #E66C32 0%, #F0854A 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
