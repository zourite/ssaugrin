import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
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
});
