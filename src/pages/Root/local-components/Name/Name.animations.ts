import { easeInQuad } from "@utils/Ease";
import { AnimationControls, TargetAndTransition, Transition, useAnimationControls } from "framer-motion";

type AnimationProps = [AnimationControls, () => void, TargetAndTransition, Transition];

export const useTitleAnimation = (): AnimationProps => {
  const titleControl = useAnimationControls();

  const initializeAnimationFc = (): void => {
    titleControl.start({
      transform: ["translate(-50%, -50%) scale(2)", "translate(-50%, -50%) scale(1)"],
      opacity: [0, 1],
      transition: { duration: 2 },
    });
  };

  const exitAnimation: TargetAndTransition = {
    // transform: ["translate(-50%, -50%) scale(1)", "translate(-50%, -50%) scale(0)"],
    opacity: [1, 0],
    transition: { duration: 0.8, ease: easeInQuad },
  };

  const transitionProperties: Transition = {
    duration: 2,
    delay: 1,
  };

  return [titleControl, initializeAnimationFc, exitAnimation, transitionProperties];
};

export const useSubtitleAnimation = (): AnimationProps => {
  const subtitleControl = useAnimationControls();

  const initializeAnimationFc = (): void => {
    subtitleControl.start({
      opacity: [0, 1],
    });
  };

  const exitAnimation: TargetAndTransition = {
    opacity: [1, 0],
  };

  const transitionProperties: Transition = {
    duration: 1,
  };

  return [subtitleControl, initializeAnimationFc, exitAnimation, transitionProperties];
};

export const useCircleAnimation = (): AnimationProps => {
  const circleControl = useAnimationControls();

  const initializeAnimationFc = (): void => {
    circleControl.start({
      maxHeight: ["0px", "600px"],
      maxWidth: ["0px", "600px"],
      transition: { duration: 4 },
    });
  };

  const exitAnimation: TargetAndTransition = {
    // maxHeight: ["600px", "0px"],
    // maxWidth: ["600px", "0px"],
    borderColor: ["rgba(255 255 255 / 1)", "rgba(255 255 255 / 0)"],
    transition: { duration: 1, ease: easeInQuad, delay: 0.1 },
  };

  const transitionProperties: Transition = {
    duration: 2,
    delay: 1,
  };

  return [circleControl, initializeAnimationFc, exitAnimation, transitionProperties];
};
