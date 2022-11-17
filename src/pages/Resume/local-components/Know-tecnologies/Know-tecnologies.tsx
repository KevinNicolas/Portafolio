import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { SiReact, SiVuedotjs, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiRedux, SiStyledcomponents, SiNodedotjs, SiSass, SiNuxtdotjs } from "react-icons/si";
import { motion, useAnimationControls, useInView } from "framer-motion";

import { ExitPresence } from "@components";
import { useThemeStore } from "@store/theme";

import { KnowTecnologiesStyles } from "./Know-tecnologies.styles";

type KnowTeclonologies = {
  label: string;
  icon: IconType;
  color: `#${string}`;
};

const knowTecnologiesByProfile: { default: KnowTeclonologies[]; react: KnowTeclonologies[]; vue: KnowTeclonologies[] } = {
  default: [
    {
      label: "Html5",
      icon: SiHtml5,
      color: "#e56027",
    },
    {
      label: "Css",
      icon: SiCss3,
      color: "#2291ea",
    },
    {
      label: "Javascript",
      icon: SiJavascript,
      color: "#ebd41c",
    },
    {
      label: "Typescript",
      icon: SiTypescript,
      color: "#2d72bc",
    },
    {
      label: "NodeJs",
      icon: SiNodedotjs,
      color: "#75c338",
    },
  ],

  react: [
    {
      label: "React",
      icon: SiReact,
      color: "#77d4f2",
    },
    {
      label: "Redux",
      icon: SiRedux,
      color: "#6f46b3",
    },
    {
      label: "Styled components",
      icon: SiStyledcomponents,
      color: "#ea9f20",
    },
  ],

  vue: [
    {
      label: "Vue",
      icon: SiVuedotjs,
      color: "#3caf7c",
    },
    {
      label: "NuxtJs",
      icon: SiNuxtdotjs,
      color: "#3caf7c",
    },
    {
      label: "Sass",
      icon: SiSass,
      color: "#bb5e8c",
    },
  ],
};

export const KnowTecnologies = () => {
  const { profile } = useThemeStore();
  const tecnologyController = useAnimationControls();
  const tecnologiesRef = useRef(null);
  const isInView = useInView(tecnologiesRef, { once: true, amount: "some" });

  const [tecnologiesToShow, setTecnologiesToShow] = useState<KnowTeclonologies[]>([...knowTecnologiesByProfile.default, ...knowTecnologiesByProfile[profile]]);

  useEffect(() => {
    if (isInView)
      tecnologyController.start({ opacity: 0, transition: { duration: 0.5 } }).then(() => {
        tecnologyController.start({ scale: 0, transition: { duration: 0 } }).then(() => {
          setTecnologiesToShow([...knowTecnologiesByProfile.default, ...knowTecnologiesByProfile[profile]]);
          tecnologyController.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
        });
      });
    else setTecnologiesToShow([...knowTecnologiesByProfile.default, ...knowTecnologiesByProfile[profile]]);
    return () => {
      tecnologyController.stop();
    };
  }, [profile]);

  return (
    <ExitPresence>
      <KnowTecnologiesStyles>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} viewport={{ once: true }} exit={{ opacity: 0, transition: { duration: 1 } }}>
          Principales tecnologias conocidas {isInView.toString()}
        </motion.h2>
        <div className="tecnologies">
          {tecnologiesToShow.map(({ color, icon, label }, index) => (
            <motion.div
              className="tecnology-container"
              key={index}
              ref={tecnologiesRef}
              initial={{ opacity: 0, scale: 0 }}
              animate={tecnologyController}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 * index } }}
              viewport={{ once: true }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              {icon({ color })}
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </KnowTecnologiesStyles>
    </ExitPresence>
  );
};
