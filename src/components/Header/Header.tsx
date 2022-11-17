import { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import { ExitPresence } from "@components";
import { ROOT_ROUTES } from "@models";
import { useAnimationStore } from "@store/animation";
import { useThemeStore } from "@store/theme";

import { HeaderStyles } from "./Header.styles";
import { NavigationLinks, NavigationLinksModal } from "./component-pieces";

export const Header = () => {
  const { colors } = useThemeStore();
  const { navigatingTo } = useAnimationStore();

  const [makeExitAnimation, setMakeExitAnimation] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const checkNavigatingToState = () => {
    if (!navigatingTo || navigatingTo.includes(ROOT_ROUTES.PORTFOLIO)) setMakeExitAnimation(false);
    else if (navigatingTo && !navigatingTo.includes(ROOT_ROUTES.PORTFOLIO)) setMakeExitAnimation(true);
  };

  useEffect(() => {
    checkNavigatingToState();
  }, []);

  useEffect(() => {
    checkNavigatingToState();
  }, [navigatingTo]);

  const handleNavMenuClick = () => {
    setShowModal(true);
  };

  return (
    <ExitPresence extraExitCondition={makeExitAnimation}>
      <HeaderStyles theme={colors}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="nav-menu"
          onClick={handleNavMenuClick}
        >
          <FiAlignJustify />
        </motion.span>
        <div className="nav-links">
          <NavigationLinks />
        </div>
        <div className="modal">{!makeExitAnimation && <NavigationLinksModal showModal={showModal} closeCallback={() => setShowModal(false)} />}</div>
      </HeaderStyles>
    </ExitPresence>
  );
};
