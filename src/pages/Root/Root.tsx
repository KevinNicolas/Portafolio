import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";

import { SocialMedia } from "@components";
import { NAVIGATION_ROUTES } from "@models";
import { useAnimationStore } from "@store/animation";

import { RootStyles } from "./Root.styles";
import { Name } from "./local-components";

export const Root = () => {
  const routes = {
    Experiencia: NAVIGATION_ROUTES.PORTFOLIO.EXPERIENCE,
    AcercaDeMi: NAVIGATION_ROUTES.PORTFOLIO.ABOUTME,
    Skills: NAVIGATION_ROUTES.PORTFOLIO.SKILLS,
    Resumen: NAVIGATION_ROUTES.PORTFOLIO.RESUME,
  };

  const { exit, setExit } = useAnimationStore();
  const navItemControl = useAnimationControls();
  const socialMediaControl = useAnimationControls();
  const navigator = useNavigate();

  useEffect(() => {
    socialMediaControl.start({
      opacity: [0, 1],
      transition: { duration: 2, delay: 1.3 },
    });

    navItemControl.start((i) => ({
      opacity: [0, 1],
      x: ["-100px", "0px"],
      transition: { delay: i * 0.2 },
    }));
  }, []);

  const handleNavigation = (to: string) => {
    setExit(true);
    setTimeout(() => {
      setExit(false);
      navigator(to);
    }, 1800);
  };

  return (
    <AnimatePresence>
      {!exit && (
        <RootStyles>
          <Name />
          <SocialMedia />
          <motion.nav className="navigation" animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
            {Object.entries(routes).map(([label, to], index) => (
              <motion.div
                key={index}
                custom={index}
                animate={navItemControl}
                whileHover={{ scale: 1.3, paddingLeft: 10, paddingRight: 10, animationDuration: "300ms" }}
                exit={{ opacity: [1, 0], x: ["0px", "100px"], transition: { delay: 0.1 * index } }}
                transition={{ duration: 0.5, type: "spring", bounce: 0 }}
              >
                <button onClick={() => handleNavigation(to)}>{label}</button>
              </motion.div>
            ))}
          </motion.nav>
        </RootStyles>
      )}
    </AnimatePresence>
  );
};
