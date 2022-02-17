import { DefaultTheme } from "styled-components";

/**
 * Notes:
 *
 * You could potentionally use CSS Variables. Since we are giving the user
 * some customization, I went with the CSS-in-JS approach.
 *
 * The css color names i chose were the ones that were given from the sketch file
 *
 * Ideally, the structure would be something like
 *
 * colors: {
 *  blueGrey: {
 *    t10: // some color
 *    t20: // some color
 *  }
 * }
 */

export const theme: DefaultTheme = {
  borderRadius: "0.25rem",
  colors: {
    backgroundColor: "hsl(155, 73%, 55%)",
    color: "hsl(200, 19%, 18%)",
    listBackgroundColor: "hsl(200, 18%, 97%)",
    blueGrey: {
      2: "#455A64",
      3: "#DADEE0",
    },
  },
};
