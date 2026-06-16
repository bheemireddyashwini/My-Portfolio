export default {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/data/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/utils/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        bg: {
          DEFAULT: "var(--bg)",
          light: "var(--bg-light)",
        },
        card: {
          DEFAULT: "var(--card)",
          light: "var(--card-light)",
        },
        border: "var(--border)",
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(18px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
};