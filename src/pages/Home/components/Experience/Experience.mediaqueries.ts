import { css } from "styled-components";

export const ExperienceMediaQueries = css`
  @media screen and (max-width: 1000px) {
    h2 {
      text-align: center;
    }

    .subtitle {
      justify-content: center;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 300px) {
    .experience-container {
      padding: 0;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;
