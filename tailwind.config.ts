import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060a",
          900: "#0a0c14",
          800: "#0f111a",
          700: "#161824",
          600: "#1f2230",
        },
        neon: {
          cyan: "#22d3ee",
          blue: "#3b82f6",
          purple: "#a855f7",
          violet: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,6,10,0) 0%, rgba(5,6,10,0.85) 70%, #05060a 100%)",
        "aurora":
          "radial-gradient(60% 60% at 20% 20%, rgba(34,211,238,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(168,85,247,0.18) 0%, transparent 60%), radial-gradient(60% 60% at 50% 80%, rgba(59,130,246,0.16) 0%, transparent 60%)",
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
        "marquee-rev": "marquee-rev 32s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-soft": {
          "0%,100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
