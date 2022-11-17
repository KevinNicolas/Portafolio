import styled, { css } from "styled-components";

const mediaQueries = css`
  @media screen and (max-width: 600px) {
    align-items: flex-start;

    .skill-list-container {
      display: none !important;
    }

    .responsive-skill-list {
      display: block;
    }

    .responsive-controls {
      display: flex;
    }
  }
`;

export const SkillsStyles = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
  overflow: auto;
  display: grid;
  grid-template-rows: 150px 1fr;
  align-items: center;
  gap: 1rem;

  .title-container {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  h3 {
    padding: 0 1rem;
    font-size: 4rem;
  }

  .skill-list-container,
  .responsive-skill-list {
    svg {
      color: white;
    }
  }

  .responsive-controls {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 50px;
    background: red;
    display: none;
    justify-content: space-around;
    align-items: center;

    button {
      width: 100%;
      height: 100%;
      font-size: 1.2rem;
      transition: filter 300ms ease-in-out;

      &.active {
        filter: brightness(1.2);
      }
    }
  }

  .responsive-skill-list {
    display: none;
    margin-bottom: 4rem;
  }

  ${mediaQueries}
`;
