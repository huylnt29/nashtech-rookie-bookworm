/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { esbuildDecorators } from "@anatine/esbuild-decorators";

export default defineConfig({
  plugins: [react(), esbuildDecorators()],
  server: {
    host: true,
    port: 2901,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTest.js",
  },
});
