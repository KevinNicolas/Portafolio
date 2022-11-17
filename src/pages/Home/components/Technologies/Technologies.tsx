import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiReactivex, SiTypescript, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

import { TechnologiesStyles } from "./Technologies.styles";

interface Props {
  initialDelay?: number;
}

export const Technologies = ({ initialDelay = 0 }: Props) => {
  return (
    <TechnologiesStyles>
      <motion.h2 animate={{ opacity: [0, 1] }} transition={{ duration: 2, delay: initialDelay }}>
        Tecnologias principales
      </motion.h2>
      <div className="list-of-technologies">
        <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 1, bounce: 1, type: "spring", delay: 1 + initialDelay }}>
          <SiHtml5 className="tech html" />
        </motion.div>
        <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 1, bounce: 1, type: "spring", delay: 1.3 + initialDelay }}>
          <SiCss3 className="tech css" />
        </motion.div>
        <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 1, bounce: 1, type: "spring", delay: 1.6 + initialDelay }}>
          <SiJavascript className="tech js" />
        </motion.div>
        <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 1, bounce: 1, type: "spring", delay: 1.9 + initialDelay }}>
          <SiNodedotjs className="tech nodejs" />
        </motion.div>
        <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 1, bounce: 1, type: "spring", delay: 2.2 + initialDelay }}>
          <SiTypescript className="tech ts" />
        </motion.div>
        <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 1, bounce: 1, type: "spring", delay: 2.5 + initialDelay }}>
          <SiReact className="tech react" />
        </motion.div>
        <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 1, bounce: 1, type: "spring", delay: 2.8 + initialDelay }}>
          <SiReactivex className="tech rxjs" />
        </motion.div>
        <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 1, bounce: 1, type: "spring", delay: 3.1 + initialDelay }}>
          <SiRedux className="tech redux" />
        </motion.div>
      </div>
    </TechnologiesStyles>
  );
};
