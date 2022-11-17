import { motion, useAnimationControls } from "framer-motion";

import { SkillsStyles } from "./Skills.styles";
import { SkillList } from "./models/Skill-list";
import { SkillCategory } from "./components";
import { ExitPresence } from "@components";
import { toHsl } from "./utils/color";
import { useEffect, useState } from "react";
import { SkillCategory as ISkillCategory } from "./interfaces/ISkills";

export const Skills = () => {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState(SkillList[0]);
  const respSkillListControl = useAnimationControls();

  useEffect(() => {
    if (window.innerWidth <= 600) respSkillListControl.start({ opacity: 1, transition: { duration: 0.2, delay: 0.8 } });
  }, []);

  useEffect(() => {
    respSkillListControl.start({ opacity: 1, transition: { duration: 0.2 } });
  }, [selectedSkillCategory]);

  const handleSelectSkillCategoryClick = async (skill: ISkillCategory) => {
    await respSkillListControl.start({ opacity: 0, transition: { duration: 0.2 } });
    setSelectedSkillCategory(() => skill);
  };

  return (
    <ExitPresence>
      <SkillsStyles>
        <div className="title-container">
          <motion.h3 initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0, transition: { duration: 1 } }} exit={{ opacity: 0, x: 100, transition: { duration: 1 } }}>
            Skills
          </motion.h3>
        </div>

        <motion.div
          className="skill-list-container"
          initial={{ opacity: 0, width: 0, minWidth: 0 }}
          animate={{ opacity: 1, width: "fit-content", minWidth: "100vw", transition: { duration: 1 } }}
          exit={{ opacity: 0, width: 0, minWidth: 0, transition: { duration: 1 } }}
        >
          {SkillList.map(({ content, color, name }, index) => (
            <SkillCategory key={index} nameOfCategory={name} values={content} colorHsl={color} />
          ))}
        </motion.div>

        <motion.div className="responsive-skill-list" initial={{ opacity: 0 }} animate={respSkillListControl} exit={{ opacity: 0, transition: { duration: 1 } }}>
          <SkillCategory nameOfCategory={selectedSkillCategory.name} values={selectedSkillCategory.content} colorHsl={selectedSkillCategory.color} chillDelay={0} />
        </motion.div>
        <motion.div
          className="responsive-controls"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {SkillList.map((skill) => (
            <button
              key={skill.name}
              style={{ background: toHsl(skill.color) }}
              className={`${skill.name === selectedSkillCategory.name && "active"}`}
              onClick={() => handleSelectSkillCategoryClick(skill)}
            >
              {skill.name}
            </button>
          ))}
        </motion.div>
      </SkillsStyles>
    </ExitPresence>
  );
};
