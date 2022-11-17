import styled, { css } from "styled-components";

export interface SkillSubcategoryStylesProps {
  alphaMultiplier: number;
}

export const SkillSubcategoryStylesCss = css<SkillSubcategoryStylesProps>`
  background: rgba(0 0 0 / ${({ alphaMultiplier }) => alphaMultiplier * 0.1 + 0.1});
  display: flex;
  flex-direction: row;
  min-height: 100px;
  width: 100%;
  height: 100%;
  padding: 0 2rem;

  svg {
    font-size: 3rem;
  }

  & > div {
    min-width: 12rem;
  }

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    padding: 1rem 2rem;
    gap: 1rem;
  }
`;

export const SkillSubcategoryStyles = styled.div<SkillSubcategoryStylesProps>`
  & {
    ${SkillSubcategoryStylesCss}
  }

  & > span {
    margin: auto 0;
    min-width: 16ch;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    & > span {
      width: 100%;
      text-align: center;
      padding: 1rem 0;
      flex-grow: 1;
    }
  }
`;
