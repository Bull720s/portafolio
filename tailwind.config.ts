import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        panel: "#0A0F20",
        card: "#0D1326",
        ink: "#F5F7FB",
        muted: "#9AA3B8",
        line: "#1C2338",
      },
      fontFamily: {
        sans: ["var(--font-dmsans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
