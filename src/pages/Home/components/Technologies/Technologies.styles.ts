import styled, { css } from "styled-components";

import { TechnologiesMediaQueries } from "./Technologies.mediaqueries";

const iconColors = css`
  .html {
    --icon-color: #e56026;
    color: var(--icon-color);
  }

  .css {
    --icon-color: #3191f1;
    color: var(--icon-color);
  }

  .js {
    --icon-color: #ebd41c;
    color: var(--icon-color);
  }

  .nodejs {
    --icon-color: #7bc226;
    color: var(--icon-color);
  }

  .ts {
    --icon-color: #2d72bc;
    color: var(--icon-color);
  }

  .react {
    --icon-color: #5ccfee;
    color: var(--icon-color);
  }

  .rxjs {
    --icon-color: #df0389;
    color: var(--icon-color);
  }

  .redux {
    --icon-color: #6f46b3;
    color: var(--icon-color);
  }
`;

export const TechnologiesStyles = styled.div`
  max-width: 100vw;
  padding: 1rem;
  h2 {
    font-size: 5rem;
  }

  .list-of-technologies {
    color: white;
    font-size: 6rem;
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5rem;
    overflow-x: auto;
    position: relative;
    gap: 3rem;

    .tech {
      transition: all 300ms ease-in-out;
      margin: 0 auto;
    }

    .tech:hover {
      transform: scale(1.1);
    }
  }

  ${iconColors}
  ${TechnologiesMediaQueries}
`;
