import styled from "styled-components";
import { getThemeProp } from "@utils";

export const IntroductionStyles = styled.div`
  width: 100vw;
  /* min-height: calc(calc(100vh - 4rem) - 400px); */
  min-height: calc(100vh - 400px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 5rem;
    text-decoration: underline ${getThemeProp("primary")};
    text-align: center;
    transition: text-decoration 300ms ease-in-out;
  }

  p {
    max-width: 150ch;
    font-size: 1rem;
    text-align: justify;
    padding-left: 1rem;
    padding-right: 1.4rem;
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
