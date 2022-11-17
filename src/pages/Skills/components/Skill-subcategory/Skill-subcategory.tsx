import { ISkill } from "../../interfaces/ISkills";
import { SkillItem } from "../Skill-item/Skill-item";
import { SkillSubcategoryStyles } from "./Skill-subcategory.styles";

interface Props {
  alphaMultiplier: number;
  nameOfSubcategory: string;
  skills: ISkill[];
  chillDelay?: number;
}

export const SkillSubcategory = ({ alphaMultiplier, nameOfSubcategory, skills, chillDelay }: Props) => {
  return (
    <SkillSubcategoryStyles alphaMultiplier={alphaMultiplier}>
      <span className="name-of-subcategory">{nameOfSubcategory}</span>
      {skills.map(({ icon, name }, index) => (
        <SkillItem key={index} icon={icon} name={name} delayMultiplier={index} chillDelay={chillDelay} />
      ))}
    </SkillSubcategoryStyles>
  );
};
