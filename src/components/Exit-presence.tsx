import { AnimatePresence } from "framer-motion";

import { useAnimationStore } from "@store/animation";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  extraExitCondition?: boolean;
}

export const ExitPresence = ({ children, extraExitCondition = true }: Props) => {
  const { exit } = useAnimationStore();

  return <AnimatePresence>{(!extraExitCondition || !exit) && children}</AnimatePresence>;
};
