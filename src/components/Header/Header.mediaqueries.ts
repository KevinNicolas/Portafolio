import { css } from "styled-components";

export const HeaderMediaQueries = css`
  @media screen and (max-width: 750px) {
    .nav-menu {
      display: flex;
    }

    .nav-links {
      display: none;
    }

    .modal {
      display: block;
    }
  }

  @media (pointer: none) or (pointer: coarse) {
    .nav-links button.link::after {
      display: none;
    }
  }
`;
