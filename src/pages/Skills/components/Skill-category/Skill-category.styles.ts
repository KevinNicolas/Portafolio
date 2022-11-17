import styled from "styled-components";
import { SkillSubcategoryStylesCss, SkillSubcategoryStylesProps } from "../Skill-subcategory/Skill-subcategory.styles";

interface Props {
  background: string;
}

export const SkillCategoryStyles = styled.div<Props & SkillSubcategoryStylesProps>`
  background: ${({ background }) => background};
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  & > span {
    min-width: 8ch;
    margin: 0 1rem;
  }

  .skill-category-container {
    display: flex;
    flex-direction: column;
    height: 100%;

    .skill-items-container {
      & > span {
        min-width: 12ch;
      }
      ${SkillSubcategoryStylesCss}
    }
  }

  @media screen and (max-width: 600px) {
    .skill-category-container {
      flex-wrap: wrap;
      max-width: 100vw;
    }
  }

  @media screen and (max-width: 360px) {
    & > span:first-child {
      display: none;
    }

    .skill-items-container {
      display: flex;
      justify-content: center;
    }
  }
`;
