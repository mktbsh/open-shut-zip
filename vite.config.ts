import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/open-shut-zip",
  plugins: [react(), tsconfigPaths()],
  build: {
    emptyOutDir: true,
    outDir: "docs",
  },
});
