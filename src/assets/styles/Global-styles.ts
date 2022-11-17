import { getThemeProp } from "@utils";
import { createGlobalStyle } from "styled-components";

import { Colors } from "./Theme";

export const GlobalStyles = createGlobalStyle<{ theme: Colors }>`
  * {
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    text-decoration: 0;
    list-style: none;
    box-sizing: border-box !important;
  }

  #root {
    min-width: 100vw;
    min-height: 100vh;
  }

  #root {
    overflow-y: auto;
    overflow-x: hidden;
  }

  @font-face {
    font-family: 'monofonto';
    src: url("/fonts/monofontorg.otf");
  }

  @font-face {
    font-family: 'zector';
    src: url("/fonts/Zector.ttf");
  }

  h1, h2, h3 {
    font-family: zector;
  }

  span, p, button {
    font-family: monofonto;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${getThemeProp("primary")};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
