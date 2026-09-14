import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://kaychiawoon-deploy-help.vercel.app", // <-- add this
  plugins: [react()],
});
