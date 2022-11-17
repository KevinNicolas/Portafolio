import { SocialMedia } from "@components";
import { motion } from "framer-motion";

import { HomeStyles } from "./Home.styles";
import { Experience, Technologies } from "./components";

export const Home = () => {
  return (
    <HomeStyles className="page-component">
      <motion.h1 animate={{ opacity: [0, 1], translateX: [-100, 0] }} transition={{ duration: 2, bounce: 1, type: "spring" }} className="name">
        Kevin Leguiza Gaggero
      </motion.h1>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 2, delay: 0.5 }}>
        <SocialMedia />
      </motion.div>
      <Technologies initialDelay={1} />
      <Experience initialDelay={1} />
      <div className="white-space" />
    </HomeStyles>
  );
};
