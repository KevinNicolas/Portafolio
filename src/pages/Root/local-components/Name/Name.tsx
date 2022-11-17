import { motion } from "framer-motion";

import { NameStyles } from "./Name.styles";
import { useTitleAnimation, useSubtitleAnimation, useCircleAnimation } from "./Name.animations";
import { useEffect } from "react";

export const Name = () => {
  const [titleControl, initializeTitleAnimation, exitTitleAnimation, titleTransitionProps] = useTitleAnimation();
  const [subtitleControl, initializeSubtitleAnimation, exitSubtitleAnimation, subtitleTransitionProps] = useSubtitleAnimation();
  const [circleControl, initializeCircleAnimation, exitCircleAnimation, circleTransitionProps] = useCircleAnimation();

  useEffect(() => {
    Promise.all([initializeTitleAnimation(), initializeSubtitleAnimation(), initializeCircleAnimation()]);
  }, []);

  return (
    <NameStyles>
      <motion.h1 className="title" animate={titleControl} exit={exitTitleAnimation} transition={titleTransitionProps}>
        Kevin Leguiza Gaggero
      </motion.h1>
      <motion.span className="subtitle" animate={subtitleControl} transition={subtitleTransitionProps} exit={exitSubtitleAnimation}>
        Frontend developer
      </motion.span>
      <motion.figure className="circle pulse" animate={circleControl} transition={circleTransitionProps} exit={exitCircleAnimation} />
      <motion.figure className="circle pulse" animate={circleControl} transition={circleTransitionProps} exit={exitCircleAnimation} />
      <motion.figure className="circle pulse" animate={circleControl} transition={circleTransitionProps} exit={exitCircleAnimation} />

      <div className="black-box" />
    </NameStyles>
  );
};
