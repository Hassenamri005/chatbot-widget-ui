import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This app imports the widget straight from ../src so changes to the
// library are reflected here without a build/publish step first.
export default defineConfig({
  plugins: [react()],
});
