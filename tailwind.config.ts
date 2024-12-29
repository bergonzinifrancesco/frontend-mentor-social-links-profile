import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inter"]
      },
      screens: {
        "mobile": "375px",
        "desktop": "1440px"
      },
      colors: {
        "green": "hsl(75, 94%, 57%)",
        "grey-500": "hsl(0, 0%, 60%)",
        "grey-700": "hsl(0, 0%, 20%)",
        "grey-800": "hsl(0, 0%, 12%)",
        "grey-900": "hsl(0, 0%, 8%)"
      },
      fontSize: {
        base: "14px"
      }
    }
  }
} satisfies Config;
