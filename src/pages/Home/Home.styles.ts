import styled from "styled-components";

export const HomeStyles = styled.div`
  max-width: 100vw;
  max-height: 100vh;

  padding-top: 1rem;

  .name {
    position: fixed;
    bottom: 1rem;
    left: 4rem;
    z-index: 999;
  }

  .white-space {
    /* display: none; */
    min-width: 1px;
    min-height: 15rem;
    height: 5rem;
  }

  @media screen and (max-width: 430px) {
    .name {
      font-size: 1.2rem;
    }
  }
`;
