import { motion } from "framer-motion";

import { ISkill } from "../../interfaces/ISkills";
import { SkillItem } from "../Skill-item/Skill-item";
import { SkillSubcategory } from "../Skill-subcategory/Skill-subcategory";
import { SkillCategoryStyles } from "./Skill-category.styles";

interface Props {
  nameOfCategory: string;
  values: ISkill[] | Record<string, ISkill[]>;
  colorHsl: [number, number, number];
  chillDelay?: number;
}
export const SkillCategory = ({ nameOfCategory, values, colorHsl: [hue, saturation, luminosity], chillDelay }: Props) => {
  return (
    <SkillCategoryStyles className="skill-category" background={`hsl(${hue}, ${saturation}%, ${luminosity}%)`} alphaMultiplier={0}>
      <span className="name-of-category">{nameOfCategory}</span>
      <motion.div className="skill-category-container" initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "100%", transition: { duration: 1 } }}>
        {Array.isArray(values) ? (
          <div className="skill-items-container">
            {/* <span></span> */}
            {values.map(({ icon, name }, index) => (
              <SkillItem key={index} icon={icon} name={name} alphaMultiplier={0} delayMultiplier={index} chillDelay={chillDelay} />
            ))}
          </div>
        ) : (
          Object.entries(values).map(([subcategoryKey, subcategoryValue], index) => (
            <SkillSubcategory key={index} alphaMultiplier={index} nameOfSubcategory={subcategoryKey} skills={subcategoryValue} chillDelay={chillDelay} />
          ))
        )}
      </motion.div>
    </SkillCategoryStyles>
  );
};
