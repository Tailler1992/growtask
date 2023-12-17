import {defineConfig, Plugin} from "vite";
import {resolve} from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }) as unknown as Plugin,
  ],
  publicDir: "public",

  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        // login: resolve(__dirname, "src/pages/login/login.html"),
      },
    },
  },
});
