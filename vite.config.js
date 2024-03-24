import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

// Load environment variables from .env.production
const envConfig = dotenv.config({ path: ".env.production" }).parsed;

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  build: {
    sourcemap: "true", // true or hidden
    minify: true,
  },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      styles: "/src/styles",
      configs: "/src/configs",
    },
  },
  define: {
    "import.meta.env": JSON.stringify(envConfig),
  },
});
