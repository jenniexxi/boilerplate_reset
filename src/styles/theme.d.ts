import "styled-components";

type Theme = {};
declare module "styled-components" {
  export interface DefaultTheme {
    lightTheme: Theme;
    darkTheme: Theme;
  }
}
