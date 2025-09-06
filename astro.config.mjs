
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://dalerivatives.github.io", // Replace with your GitHub Pages URL
  base: "/dalerivatives", // Replace with your repo name
  vite: {
    plugins: [tailwindcss()],
  },
});

