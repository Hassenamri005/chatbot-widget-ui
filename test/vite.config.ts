import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This app consumes the chatbot-widget-ui package from npm, so it builds
// like any other project depending on the published library.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5111,
  },
});
