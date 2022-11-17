import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

import { ExitPresence } from "@components";
import { useThemeStore } from "@store/theme";

export const Divisor = () => {
  const { colors } = useThemeStore();
  const animationControl = useAnimationControls();

  useEffect(() => {}, []);

  useEffect(() => {
    animationControl.set({ background: colors.primary });
  }, [colors]);

  return (
    <ExitPresence>
      <motion.hr
        style={{
          transition: "background 300ms ease-in-out",
        }}
        initial={{
          opacity: 0,
          width: "0vw",
          margin: "3em auto",
          height: "2px",
          background: colors.primary,
        }}
        whileInView={{ opacity: 1, width: "80vw", transition: { duration: 1 } }}
        viewport={{ once: true }}
        animate={animationControl}
        exit={{ width: "0vw", opacity: 0, transition: { duration: 0 } }}
      />
    </ExitPresence>
  );
};
