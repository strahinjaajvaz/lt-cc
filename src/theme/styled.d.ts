import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    // using the same values that are returned from the api
    // as per the instructions given.
    colors: {
      backgroundColor: string;
      color: string;
    };
  }
}
