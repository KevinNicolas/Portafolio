import styled from "styled-components";

export const SocialMediaStyles = styled.div`
  &,
  & > * {
    z-index: 999;
  }

  .social-media-container {
    position: fixed;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    left: 1rem;
    bottom: 1rem;

    a {
      font-size: 1.5rem;
      color: white;
      background: #333;
      height: 2.5rem;
      padding: 0.5rem;
      border-radius: 5px;
      transition: all 300ms ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      &.linkedin:hover {
        background: #0d66c2;
      }
      &.github:hover {
        background: white;
        color: black;
      }
      &.gmail:hover {
        background: #e94235;
      }
    }
  }
`;
