import { defineConfig, presetWebFonts, presetWind } from "unocss";
import presetClark from "./presetClark";

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: {},
    }),
    presetClark(),
  ],
});
