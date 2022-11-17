import { FiTerminal } from "react-icons/fi";
import { motion } from "framer-motion";

import { ExperienceStyles } from "./Experience.styles";

interface Experience {
  name: string;
  timeStart: `${number}/${number}/${number}`;
  endTime: `${number}/${number}/${number}` | "Actualidad";
  url?: string;
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { endTime, name, timeStart, url } = experience;

  return (
    <div className="experience-card">
      <h3>{name}</h3>
      <span>
        Desde: {timeStart} <span className="divisor">-</span> Hasta: {endTime}
      </span>
      {url ? (
        <a href={url} target="_blank" className="link-to-page">
          <FiTerminal /> Ir al sitio web
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

interface Props {
  initialDelay?: number;
}

export const Experience = ({ initialDelay = 0 }: Props) => {
  const experiences: Experience[] = [
    {
      name: "Autodidacta",
      timeStart: "2015/01/01",
      endTime: "2019/11/01",
    },
    {
      name: "Devactory",
      timeStart: "2019/11/01",
      endTime: "Actualidad",
      url: "https://devactory.com/",
    },
  ];

  return (
    <ExperienceStyles>
      <motion.h2 animate={{ opacity: [0, 1] }} transition={{ duration: 2, delay: 3 + initialDelay }}>
        Experiencia
      </motion.h2>
      <motion.span className="subtitle" animate={{ opacity: [0, 1] }} transition={{ duration: 2, delay: 3.2 + initialDelay }}>
        <span>2015-2019 programando, </span>
        <span>2020-{new Date().getFullYear()} trabajando</span>
      </motion.span>
      <div className="experiences">
        {experiences.map((experience, key) => (
          <motion.div key={key} animate={{ scale: [0, 1] }} transition={{ duration: 1, delay: 3.2 + initialDelay + 0.3 * (key + 1), bounce: 1, type: "spring" }}>
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </div>
    </ExperienceStyles>
  );
};
