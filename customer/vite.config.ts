import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { esbuildDecorators } from "@anatine/esbuild-decorators";

export default defineConfig({
  plugins: [react(), esbuildDecorators()],
  // server: {
  //   host: true,
  //   port: 8000,
  //   strictPort: true,
  //   watch: {
  //     usePolling: true,
  //   },
  // },
});
