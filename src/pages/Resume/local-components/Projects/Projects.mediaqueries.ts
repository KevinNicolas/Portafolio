import { css } from "styled-components";

export const ProjectMediaQueries = css`
  @media screen and (max-width: 1300px) {
    .projects {
      justify-content: start;
    }
  }

  @media screen and (max-width: 450px) {
    min-height: 400px;
    gap: 1rem;
    h2 {
      font-size: 1.5rem;
    }

    .projects {
      height: 200px;

      .project-container {
        min-width: 250px;
        max-width: 250px;
        height: 150px;

        span {
          font-size: 0.8em;
        }

        img {
          max-height: 100px;
          max-width: 200px;
        }
      }
    }
  }
`;
