import styled from "styled-components";

interface Props {
  alphaMultiplier?: number;
}

export const SkillItemStyle = styled.div<Props>`
  div {
    background: rgba(0 0 0 / ${({ alphaMultiplier }) => (alphaMultiplier ? alphaMultiplier * 0.02 + 0.1 : 0)});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    gap: 0.4rem;
    height: 100%;
  }
`;
