import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    // using the same values that are returned from the api
    colors: {
      backgroundColor: string;
      color: string;

      blueGrey: {
        2: string;
        3: string;
      };
      listBackgroundColor: string;
    };
  }
}
