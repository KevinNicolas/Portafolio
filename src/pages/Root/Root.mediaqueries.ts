import { css } from "styled-components";

export const RootMediaQueries = css`
  @media screen and (max-width: 600px) {
    .navigation {
      flex-direction: column-reverse;
      align-items: end;
    }
  }
`;
