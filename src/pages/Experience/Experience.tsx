import { motion } from "framer-motion";

import { ExitPresence } from "@components";

import { ExperienceStyles } from "./Experience.styles";
import { Experiencecard } from "./components";

export const Experience = () => {
  return (
    <ExitPresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }} exit={{ opacity: 0, transition: { duration: 1 } }}>
        <ExperienceStyles>
          <motion.div
            className="title"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: 30, transition: { duration: 1 } }}
          >
            <h2>Experiencia</h2>
          </motion.div>
          <div className="experiences">
            <Experiencecard delay={0.4} />
            <Experiencecard delay={0.5} />
            <Experiencecard delay={0.6} />
            <Experiencecard delay={0.7} />
            <Experiencecard delay={0.8} />
          </div>
          <div className="white-space"></div>
        </ExperienceStyles>
      </motion.div>
    </ExitPresence>
  );
};