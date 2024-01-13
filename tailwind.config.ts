import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-bg":
       
        "radial-gradient(circle, #4f5c8c, #45589e, #3a54b0, #2e4fc1, #2448d1);",
        space: "url('/coduBg.jpeg')",
      },
      maxWidth: {
        "container-width": "100rem",
      },
      colors: {
        "overall-bg-original": "hsl(227, 28%, 43%)",
        "overall-bg": "#f8fafc",

        "box-bg": "hsl(111, 7%, 20%)",
        codeGradient: "hsla(336, 72%, 52%, 1), hsla(26, 95%, 61%, 1)",

        coduGradient:
          "linear-gradient(to top, hsla(336, 72%, 52%, 1), hsla(26, 95%, 61%, 1))",
        coduColor: "#f17f06",
        cream: "hsl(0, 0%, 85%)",
        bgCream: "hsl(22, 15%, 90%)",
   
        treeBG: "#f5efea",
        green: "#40c2a6",
        waiterYellow: "#ffff00",
        lilac: {
          100: "hsl(227, 100%, 72%)",
          300: "hsl(227, 100%, 77%)",
          600: "hsl(227, 100%, 82%)",
        },

        navy: {
          100: "hsl(227, 47%, 24%)",
          300: "hsl(227, 57%, 34%)",
          600: "hsl(227, 57%, 40%)",
        },
      },

      gridTemplateRows: {
        threeBox: "auto 1fr 1fr",
        destinationDesktop: "auto 1fr auto",
        crewMobile: "auto 1fr auto",
        crewDesktop: "auto 1fr",
        crewDetails: "auto auto 1fr auto",
        technologyMobile: "auto auto auto auto",
        technologyDesktop: "auto 1fr",
      },

      gridTemplateColumns: {
        fourBox: "1fr 1fr",
        crewDesktop: "1fr 1fr",
        technologyDesktop: "auto 1fr 1fr",
      },
      screens: {
        s40: "400px",
        s45: "450px",
        s50: "500px",
        s60: "600px",
        s70: "700px",
        s80: "800px",
        s85: "850px",
        s100: "1000px",
        s120: "1200px",
        s140: "1400px",
        s145: "1450px",
      },
    },
  },
  plugins: [],
};
export default config;
