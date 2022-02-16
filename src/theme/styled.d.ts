import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    // using the same values that are returned from the api
    colors: {
      backgroundColor: string;
      color: string;

      // idealy, there would be a color pallet that would
      // have this as grey.10
      listBackgroundColor: string;
    };
  }
}
