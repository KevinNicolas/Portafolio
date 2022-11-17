import { getThemeProp } from "@utils";
import { createGlobalStyle } from "styled-components";

export interface Colors {
  bodyBackground: string;
  primary: string;
  textColor: string;
}

export const Theme = createGlobalStyle<{ theme: Colors }>`
  :root {
    --primary: ${getThemeProp("primary")}
    --body-background: ${getThemeProp("bodyBackground")};
  }

  span, p, h1, h2, h3, button {
    color: ${getThemeProp("textColor")};
  }

  body {
    background: ${getThemeProp("bodyBackground")};
  }
`;

export const darkTheme: Colors = {
  bodyBackground: "#000",
  primary: "#44adff",
  textColor: "#f5f5f5",
};

export const lightTheme: Colors = {
  bodyBackground: "#fafafa",
  primary: "#028fff",
  textColor: "#333",
};
