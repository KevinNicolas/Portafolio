import { motion } from "framer-motion";

import { ExitPresence } from "@components";
import { useThemeStore } from "@store/theme";

import { IntroductionStyles } from "./Introduction.styles";

export const Introduction = () => {
  const { colors } = useThemeStore();

  return (
    <ExitPresence>
      <IntroductionStyles theme={colors}>
        <motion.h1 initial={{ opacity: 0, y: "100px" }} animate={{ opacity: 1, y: "0px", transition: { duration: 1 } }} exit={{ opacity: 0, transition: { duration: 1 } }}>
          Frontend developer
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }} exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis aliquam explicabo accusamus fugiat ea neque officia eos temporibus facere? Cum molestias assumenda
          pariatur ipsam numquam ipsum voluptatibus quas voluptatem!
        </motion.p>
      </IntroductionStyles>
    </ExitPresence>
  );
};
