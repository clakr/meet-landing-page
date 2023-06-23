import { defineConfig, presetWebFonts, presetWind } from "unocss";
import presetClark from "./presetClark";

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: { sans: "Red Hat Display:400,700" },
    }),
    presetClark({
      preflights: [
        {
          getCSS: () =>
            ":root { font-size: 62.5%; font-family: 'Red Hat Display', sans-serif; }",
        },
      ],
    }),
  ],
  theme: {
    colors: {
      snow: "#fafafa",
      valhalla: "#28283D",
      manatee: "#87879D",
      "columbia-blue": "#8FE3F9",
      "boston-blue": "#4D96A9",
      deluge: "#855FB1",
      mauve: "#D9B8FF",
    },
  },
  layers: {
    presetClark: 3,
  },
});
