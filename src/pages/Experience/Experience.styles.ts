import styled from "styled-components";
import { ExperienceMediaQueries } from "./Experience.mediaqueries";

export const ExperienceStyles = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;

  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .title {
    display: flex;
    align-items: flex-end;
    padding: 0 1rem;
    min-height: 150px;
    height: 150px;
    width: 100%;

    h2 {
      font-size: 4rem;
    }
  }

  .experiences {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    width: 100%;
    max-width: 800px;
    border-radius: 5px;
    padding: 1rem;
    overflow-y: auto;
  }

  .white-space {
    min-height: 2rem;
    width: 100%;
  }

  ${ExperienceMediaQueries}
`;
