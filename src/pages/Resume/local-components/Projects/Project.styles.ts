import styled, { css } from "styled-components";

import { Colors } from "@assets/styles/Theme";
import { getThemeProp, parseHexToRgbaString } from "@utils";

import { ProjectMediaQueries } from "./Projects.mediaqueries";

const ProjectsStyles = css<{ theme: Colors }>`
  max-width: 100vw;
  width: 100vw;
  height: 400px;
  padding: 0 1.4rem 0 1rem;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  overflow-x: auto;

  .project-container {
    /* min-width: 380px; */
    width: 400px;
    max-width: 400px;
    height: 300px;
    /* border: 2px solid white; */
    padding: 1em;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
      border: 2px solid ${getThemeProp("primary")};
      border-radius: 5px;
      max-height: 200px;
      max-width: 400px;
      transition: all 150ms ease-in-out;
      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }

    span {
      font-size: 1.2rem;
    }

    /* &:hover {
      border-color: ${getThemeProp("primary")};
    }

    &:active {
      transform: scale(0.95) !important;
    } */
  }
`;

export const ProjectStyles = styled.div<{ theme: Colors }>`
  width: 100vw;
  min-height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 3em;

  &,
  .projects {
    display: flex;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    padding: 0 1ch;

    .profile {
      text-transform: capitalize;
      color: ${getThemeProp("primary")};
    }
  }

  .projects {
    ${ProjectsStyles}
  }
  ${ProjectMediaQueries}
`;
