import styled, { css } from "styled-components";

import { NameMediaQueries } from "./Name.mediaqueries";

const keyframes = css`
  @keyframes pulse {
    0% {
      opacity: 0;
      width: 0;
      height: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      width: var(--ring-radius);
      height: var(--ring-radius);
    }
  }
`;

export const NameStyles = styled.div`
  .title,
  .subtitle,
  .circle {
    position: fixed;
    text-align: center;
    white-space: nowrap;
  }

  .title,
  .circle,
  .black-box {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    font-size: 3rem;
    z-index: 3;
  }

  .subtitle {
    color: rgba(255 255 255 / 0.8);
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .circle {
    background: transparent;
    border: 1px solid rgba(255 255 255 / 0.5);
    border-radius: 100%;
    z-index: 1;
  }

  .pulse {
    --ring-radius: 600px;
    animation: pulse 3s infinite linear;

    &:nth-of-type(1) {
      animation-delay: 1s;
    }
    &:nth-of-type(2) {
      animation-delay: 2s;
    }
  }

  .black-box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    background: black;
    z-index: 2;
    opacity: 1;
    border-radius: 100%;
  }
  ${keyframes}
  ${NameMediaQueries}
`;
