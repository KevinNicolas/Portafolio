import { css } from "styled-components";

export const MediaQueries = css`
  @media screen and (max-width: 700px) {
    grid-template-rows: 150px 1fr;
    overflow-y: auto;

    .content {
      grid-template-columns: 1fr;
      grid-template-rows: 400px 1fr;
      padding: 1rem 0;
      gap: 2rem;
      /* overflow-x: hidden; */
      overflow-y: visible;
      justify-content: center;

      .about-me {
        padding: 0 1rem;
        overflow-y: visible;
        display: block;
      }
    }
  }
`;
