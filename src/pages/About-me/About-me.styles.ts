import styled from "styled-components";
import { MediaQueries } from "./Avout-me.mediaqueries";

export const AboutmeStyles = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-template-columns: 1fr;
  width: 100vw;
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;

  .title-container {
    height: 100%;
    padding: 0 1rem;
    display: flex;
    align-items: flex-end;

    h3 {
      font-size: 3rem;
    }
  }

  .content {
    display: grid;
    grid-template-columns: minmax(300px, 450px) minmax(400px, 1fr);
    grid-template-rows: calc(100vh - 200px);
    margin: 0 auto;

    .brand {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      max-height: 400px;
      margin: auto;
      padding: 0 1rem;

      .avatar-image {
        border-radius: 100%;
        width: 100%;
        margin-bottom: 1rem;
      }

      span {
        font-size: 1.2rem;
        margin-left: 1rem;
        text-align: center;
        line-height: 1.7rem;

        &.highlight {
          font-weight: 600;
        }
      }
    }

    .about-me {
      padding: 1rem;
      overflow-y: auto;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      p {
        font-size: 1rem;
      }
    }
  }

  ${MediaQueries}
`;
