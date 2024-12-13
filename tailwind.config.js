/** @type {import("tailwindcss").Config} */
const {addDynamicIconSelectors} = require("@iconify/tailwind");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#165dff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
  safelist: [
      "icon-[jam--home-f]",
      "icon-[si--user-fill]",
      "icon-[solar--archive-minimalistic-bold-duotone]"
  ]
};
