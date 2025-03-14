import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5178,
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/Components"),
      views: path.resolve(__dirname, "src/views"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
});
