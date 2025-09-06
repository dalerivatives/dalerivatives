// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://dalerivatives.github.io',
  base: '/dalerivatives',
  vite: {
    plugins: [tailwindcss()],
  },
});
