import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      mainFont: ['var(--font-sourceSans)']
    },
  	extend: {
      screens: {
        'xs': '400px',
      },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
        sorange:'var(--sorange)',
        saccent:'var(--saccent)',
        sdarkblue:'var(--sdarkblue)',
        sgray:'var(--sgray)',
        sprimary:'var(--sprimary)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
