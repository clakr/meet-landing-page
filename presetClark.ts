import { Preset, PresetOptions } from "unocss";

export default function presetClark(options?: PresetOptions): Preset {
  return {
    name: "presetClark",
    theme: {
      breakpoints: {
        tablet: "768px",
        desktop: "1440px",
      },
    },
    shortcuts: {
      counter:
        "mx-auto w-5.6 h-5.6 grid place-items-center c-manatee fs-1.6 fw-900 lh-2.6 rounded-full border border-manatee/25 relative after:content-empty after:absolute after:h-8.4 after:w-.1 after:bg-manatee after:opacity-25 after:-top-8.4",
      grid__image: "br-.8",
    },
    rules: [
      [
        /^mt-([\d.-]+)$/,
        ([, value]) => ({
          "margin-top": `${value}rem`,
        }),
      ],
      [
        /^mb-([\d.-]+)$/,
        ([, value]) => ({
          "margin-bottom": `${value}rem`,
        }),
      ],
      [
        /^my-([\d.-]+)\/([\d.-]+)$/,
        ([, topValue, bottomValue]) => ({
          "margin-block": `${topValue}rem ${bottomValue}rem`,
        }),
      ],
      [
        /^w-([\d.-]+)$/,
        ([, value]) => ({
          width: `${value}rem`,
        }),
      ],
      [
        /^h-([\d.-]+)$/,
        ([, value]) => ({
          height: `${value}rem`,
        }),
      ],
      [
        /^fs-([\d.-]+)$/,
        ([, value]) => ({
          "font-size": `${value}rem`,
        }),
      ],
      [
        /^lh-([\d.-]+)$/,
        ([, value]) => ({
          "line-height": `${value}rem`,
        }),
      ],
      [
        /^px-([\d.-]+)$/,
        ([, value]) => ({
          "padding-inline": `${value}rem`,
        }),
      ],
      [
        /^ta-([\w]+)$/,
        ([, value]) => ({
          "text-align": value,
        }),
      ],
      [
        /^br-([\d.-]+)$/,
        ([, value]) => ({
          "border-radius": `${value}rem`,
        }),
      ],
      [
        /^py-([\d.-]+)$/,
        ([, value]) => ({
          "padding-block": `${value}rem`,
        }),
      ],
      [
        /^top-([\d.-]+)$/,
        ([, value]) => ({
          top: `${value}rem`,
        }),
      ],
      [
        /^gap-([\d.-]+)$/,
        ([, value]) => ({
          gap: `${value}rem`,
        }),
      ],
      [
        /^ls-([\d.-]+)$/,
        ([, value]) => ({
          "letter-spacing": `${value}rem`,
        }),
      ],
      [
        /^pt-([\d.-]+)$/,
        ([, value]) => ({
          "padding-top": `${value}rem`,
        }),
      ],
      [
        /^pb-([\d.-]+)$/,
        ([, value]) => ({
          "padding-bottom": `${value}rem`,
        }),
      ],
      [
        "bg-mobile-footer",
        {
          "background-image": "url(/mobile/image-footer.jpg)",
        },
      ],
    ],
  };
}
