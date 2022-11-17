import styled, { css } from "styled-components";

import { Colors } from "@assets/styles";
import { getThemeProp } from "@utils";

import { HeaderMediaQueries } from "./Header.mediaqueries";

const underlineOnHover = css`
  & {
    position: relative;
  }

  &::after {
    content: ".";
    color: transparent;
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: ${getThemeProp("primary")};
    transition: all 300ms ease-in-out;
  }

  &:hover {
    &::after {
      left: 0;
      width: 100%;
    }
  }
`;

export const HeaderStyles = styled.div<{ theme: Colors }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  min-height: 4rem;
  max-height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding-left: 2rem;
  padding-right: calc(2rem + 10px);
  background: linear-gradient(rgba(0 0 0 / 0.9), rgba(0 0 0 / 0.8), rgba(0 0 0 / 0.7), transparent);
  z-index: 20;

  .nav-links {
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    button.link {
      background: transparent;
      font-size: 1rem;
      ${underlineOnHover}
    }
  }

  .nav-menu {
    display: none;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: transform 300ms ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }

  .modal {
    display: none;
  }

  ${HeaderMediaQueries}
`;
