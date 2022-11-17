import { motion } from "framer-motion";

import { ExperiencecardStyles } from "./Experience-card.styles";

interface Props {
  delay?: number;
}

export const Experiencecard = ({ delay = 0 }: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay } }} exit={{ opacity: 0 }}>
      <ExperiencecardStyles>
        <h3>Estudio autodidacta</h3>
        <span className="time">(2015-2019)</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum distinctio porro aliquam deserunt saepe sint doloremque, eaque adipisci alias nobis beatae atque et odio
          obcaecati culpa assumenda ea, nisi inventore?
        </p>
      </ExperiencecardStyles>
    </motion.div>
  );
};
