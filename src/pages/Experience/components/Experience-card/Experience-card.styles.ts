import styled from "styled-components";

export const ExperiencecardStyles = styled.div`
  width: 100%;
  height: 200px;
  background: rgba(20 20 20 / 0.9);
  padding: 1rem;
  border-radius: 5px;

  h3 {
    font-size: 2rem;
    margin-bottom: 0.3rem;
  }

  .time {
    margin-left: 1ch;
    font-size: 1.5rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 550px) {
    height: 300px;
  }

  @media screen and (max-width: 400px) {
    height: 400px;
    h3 {
      font-size: 1.5rem;
    }
  }
`;
