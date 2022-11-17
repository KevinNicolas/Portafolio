import styled, { css } from "styled-components";

const tecnologiesStyles = css`
  width: 100vw;
  min-height: 300px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 1rem;

  &,
  .tecnology-container {
    display: flex;
  }

  .tecnology-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;

    svg {
      font-size: 3em;
    }
  }
`;

export const KnowTecnologiesStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 50px;

  h2 {
    font-size: 3rem;
    grid-column: 2;
    text-align: center;
    padding: 0 1ch;
  }

  .tecnologies {
    ${tecnologiesStyles}
  }

  @media screen and (max-width: 450px) {
    margin-top: 0;

    h2 {
      font-size: 1.5rem;
    }

    .tecnologies {
      min-height: 0px;

      .tecnology-container {
        font-size: 1rem;

        svg {
          font-size: 2rem;
        }
      }
    }
  }
`;
