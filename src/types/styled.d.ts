import "styled-components";
import { defaultTheme } from "../styles/theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface defaultTheme extends ThemeType {}
}
