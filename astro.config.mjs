import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://trail-treasures.example.com',
  integrations: [tailwind()],
  output: 'static'
});