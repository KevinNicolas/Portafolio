import { css } from "styled-components";
export const TechnologiesMediaQueries = css`
  @media screen and (max-width: 1000px) {
    h2 {
      text-align: center;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 3rem;
    }

    .list-of-technologies {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 300px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
