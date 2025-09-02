import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",   // tells Vite to look for index.html inside src
  build: {
    outDir: "../dist", // output in project root
  },
});
