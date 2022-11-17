import styled from "styled-components";

export const ProfileSelectStyles = styled.div`
  width: 100vw;
  height: 400px;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
  font-size: 2rem;

  & {
    display: flex;
    align-items: center;
  }

  & > button {
    font-size: 2rem;

    svg {
      font-size: 5rem;
      transition: all 300ms ease-in-out;
    }

    &:hover svg {
      font-size: 6rem;
    }

    &.active {
      gap: 2rem;

      svg {
        font-size: 6rem;
      }
    }

    &:not(.active) {
      filter: grayscale();
    }
  }

  .react svg {
    color: #028fff;
  }

  .vue svg {
    color: #42b883;
  }

  @media screen and (max-width: 450px) {
    & > button {
      font-size: 1rem;

      svg {
        font-size: 2rem;
      }

      &:hover svg {
        font-size: 2.5rem;
      }

      &.active {
        svg {
          font-size: 2.5rem;
        }
      }
    }
  }
`;
