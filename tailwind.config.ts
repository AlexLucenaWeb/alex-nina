const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vibes: ["var(--font-vibes)", "cursive"],
        garamod: ["var(--font-garamod)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
