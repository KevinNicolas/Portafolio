import { IconType } from "react-icons";
import { motion } from "framer-motion";

import { easeInQuad } from "@utils/Ease";

import { SkillItemStyle } from "./Skill-item.styles";

interface Props {
  icon: IconType;
  name: string;
  alphaMultiplier?: number;
  delayMultiplier?: number;
  chillDelay?: number;
}

export const SkillItem = ({ alphaMultiplier, icon, name, delayMultiplier = 0, chillDelay = 1 }: Props) => {
  return (
    <SkillItemStyle className="skill-item" alphaMultiplier={alphaMultiplier}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay: chillDelay + 0.1 * delayMultiplier, ease: easeInQuad } }}>
        {icon({})}
        <span>{name}</span>
      </motion.div>
    </SkillItemStyle>
  );
};
