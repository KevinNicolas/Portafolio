import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPath from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3010,
  },
  plugins: [react(), tsConfigPath()],
});
