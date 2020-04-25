import Typography from "typography"
import altonTheme from "typography-theme-alton"

const typography = new Typography(
  {
    googleFonts: [
      {
        name: "Montserrat",
        styles: ["700"],
      },
      {
        name: "Merriweather",
        styles: ["400", "400i", "700", "700i"],
      },
    ],
    headerFontFamily: [
      "Avenir Next",
      "Helvetica Neue",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
    bodyFontFamily: ["Merriweather"],
  },
  altonTheme
)

export const { scale, rhythm, options } = typography
export default typography
