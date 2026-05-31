import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "static/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "assets/css/main.css"),
        app: resolve(process.cwd(), "assets/js/app.js"),
      },
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "assets/[name].js",
      },
    },
  },
  server: {
    origin: "http://localhost:5173",
  },
});
