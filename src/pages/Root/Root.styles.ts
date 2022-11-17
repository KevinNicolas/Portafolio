import styled from "styled-components";
import { RootMediaQueries } from "./Root.mediaqueries";

export const RootStyles = styled.div`
  min-width: 100vw;
  height: 90vh;
  overflow: hidden;
  animation: fade-in 100ms ease-in-out;
  overflow: hidden;

  .navigation {
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    gap: 1rem;
    padding: 1rem;

    & button {
      color: white;
      background: transparent;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }

  ${RootMediaQueries}
`;
