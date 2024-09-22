/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "var(--primary)",
        bgColor: "var(--bg-color)",
        bgEnvelopeColor: "var(--bg-envelope-color)",
        envelopeTab: "var(--envelope-tab)",
        envelopeCover: "var(--envelope-cover)",
        shadowColor: "var(--shadow-color)",
        txtColor: "var(--txt-color)",
        heartColor: "var(--heart-color)",
      },
      animation: {
        'smooth-bounce': 'smooth-bounce 0.5s ease-in-out infinite',
        flap: 'flap 0.6s ease-in-out',
      },
      keyframes: {
        'smooth-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flap: {
          '0%': { transform: 'rotateX(0)' },
          '100%': { transform: 'rotateX(180deg)' },
        },
      },
    },
  },
  plugins: [],
};
