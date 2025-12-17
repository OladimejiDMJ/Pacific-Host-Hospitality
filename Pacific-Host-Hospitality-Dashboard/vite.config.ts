import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // GitHub Pages project repo
  base: "/Pacific-Host-Hospitality/",

  plugins: [react()],

  // SOURCE
  root: path.resolve(__dirname, "client"),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  // OUTPUT
  build: {
    outDir: path.resolve(__dirname, "docs"),
    emptyOutDir: true,
  },
});