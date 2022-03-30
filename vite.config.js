import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const alias = { random: path.resolve(__dirname, ".alias/index.js") };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias,
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
