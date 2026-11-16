import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  // `public/` is Hugo's output directory: it must never be copied into the
  // Vite build output (that used to nest dist/dist/... on every build).
  publicDir: false,
  build: {
    outDir: "static/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "assets/css/main.css"),
      },
      output: {
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
  server: {
    origin: "http://localhost:5173",
  },
});
