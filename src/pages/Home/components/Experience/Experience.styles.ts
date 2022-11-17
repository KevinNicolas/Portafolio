import styled from "styled-components";

import { ExperienceMediaQueries } from "./Experience.mediaqueries";

export const ExperienceStyles = styled.div`
  margin-top: 5rem;

  h2 {
    font-size: 5rem;
    padding-left: 1rem;
  }

  .subtitle {
    padding-left: 2rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > span {
      color: rgba(255 255 255 / 0.7);
    }
  }

  .experiences {
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;

    .experience-card {
      background: rgba(100 100 100 / 0.2);
      max-width: 30rem;
      min-height: 8rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      border-radius: 5px;
      padding: 1rem;
      transition: all 300ms ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      h3 {
        font-size: 2rem;
      }

      a {
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.3rem;
        transition: all 300ms ease-in-out;

        &:hover {
          transform: scale(1.1) translateX(1rem);
        }
      }
    }
  }

  ${ExperienceMediaQueries}
`;
