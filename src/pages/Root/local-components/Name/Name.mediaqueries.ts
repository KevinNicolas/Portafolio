import { css } from "styled-components";

export const NameMediaQueries = css`
  @media screen and (max-width: 550px) {
    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .pulse {
      --ring-radius: 100vw;
    }
  }

  @media screen and (max-width: 370px) {
    .title {
      font-size: 1.5rem;
    }
    .subtitle {
      font-size: 0.9rem;
    }
  }
`;
