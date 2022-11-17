import styled from "styled-components";

import { Colors } from "@assets/styles/Theme";
import { getThemeProp } from "@utils";

export const ResumeStyles = styled.div<{ theme: Colors }>`
  & {
    width: 100vw;
    max-height: 100vh;
    padding-top: 4rem;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
