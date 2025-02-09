/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueColor: "#007BFF", // Represents reliability and professionalism.
        blueColor2: "#0A84FF", // Represents reliability and professionalism.
        tealColor: "#008080", // Gives a modern and refreshing look.
        tealColor2: "#0FB9B1", // Gives a modern and refreshing look.
        grayColor: "#F8F9FA", // Neutral background to maintain focus on content.
        grayColor2: "#E0E0E0", // Neutral background to maintain focus on content.
        blackColor: "#1E1E1E", // Used for text and contrast.
        blackColor2: "#343A40", // Used for text and contrast.
        orangeColor: "#FF8C00", // Highlights important buttons, CTAs, or banners.
        orangeColor2: "#FF5722", // Highlights important buttons, CTAs, or banners.
        greenColor: "#28A745", // Used for "Available" or "Best Deals" highlights.
        greenColor2: "#00C853" // Used for "Available" or "Best Deals" highlights.

      },
    },
  },
  plugins: [],
};
