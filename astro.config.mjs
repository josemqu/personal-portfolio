import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: "hybrid",
  adapter: vercel(),
  integrations: [react()]
});