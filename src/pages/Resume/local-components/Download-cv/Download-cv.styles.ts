import styled from "styled-components";

import { Colors } from "@assets/styles/Theme";
import { getThemeProp } from "@utils";

export const DownloadCvStyles = styled.div<{ theme: Colors }>`
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    min-width: 200px;
    max-width: 400px;
    width: 100%;
    height: 50px;
    background: ${getThemeProp("primary")};
    color: white;
    margin-right: 10px;
    border-radius: 5px;

    .profile {
      text-transform: capitalize;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 25px 0;
    height: fit-content;
  }
`;
