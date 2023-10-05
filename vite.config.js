import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".jpg", ".png"], // Include image file extensions
  },
});
