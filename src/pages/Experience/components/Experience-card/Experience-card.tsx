import { motion } from "framer-motion";

import { ExperienceSchema } from "@models";
import { getYearForString } from "@utils";

import { ExperiencecardStyles } from "./Experience-card.styles";

interface Props {
  delay?: number;
  experienceData: ExperienceSchema;
}

export const Experiencecard = ({ experienceData, delay = 0 }: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay } }} exit={{ opacity: 0 }}>
      <ExperiencecardStyles>
        <h3>{experienceData.title}</h3>
        <span className="time">({`${getYearForString(experienceData.from)} - ${getYearForString(experienceData.to) ?? "Actualidad"}`})</span>
        <p>{experienceData.description}</p>
      </ExperiencecardStyles>
    </motion.div>
  );
};
