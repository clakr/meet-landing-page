import { defineConfig, presetWebFonts, presetWind } from "unocss";
import presetClark from "./presetClark";

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: { sans: "Red Hat Display:400,700" },
    }),
    presetClark(),
  ],
  layers: {
    presetClark: 3,
  },
  preflights: [
    {
      getCSS: () =>
        ":root { font-size: 62.5%; font-family: 'Red Hat Display', sans-serif; }",
    },
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
  shortcuts: {
    counter:
      "mx-auto w-5.6 h-5.6 grid place-items-center c-manatee fs-1.6 fw-900 lh-2.6 rounded-full border border-manatee/25 relative bg-snow after:content-empty after:absolute after:h-8.4 after:w-.1 after:bg-manatee after:opacity-25 after:-top-8.4",
    grid__image: "br-.8",
  },
  rules: [
    [
      "bg-mobile-footer",
      {
        "background-image": "url(/mobile/image-footer.jpg)",
      },
    ],
    [
      "bg-tablet-footer",
      {
        "background-image": "url(/tablet/image-footer.jpg)",
      },
    ],
    [
      "bg-desktop-footer",
      {
        "background-image": "url(/desktop/image-footer.jpg)",
      },
    ],
  ],
});
