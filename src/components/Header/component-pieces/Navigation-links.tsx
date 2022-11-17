import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { NAVIGATION_ROUTES } from "@models";
import { useAnimationStore } from "@store/animation";

interface Props {
  styles?: React.CSSProperties;
  onClickAction?: () => void;
}

export const NavigationLinks = ({ onClickAction, styles }: Props) => {
  const routes = {
    Inicio: NAVIGATION_ROUTES.ROOT.HOME,
    Experiencia: NAVIGATION_ROUTES.PORTFOLIO.EXPERIENCE,
    AcercaDeMi: NAVIGATION_ROUTES.PORTFOLIO.ABOUTME,
    Skills: NAVIGATION_ROUTES.PORTFOLIO.SKILLS,
    Redes: NAVIGATION_ROUTES.PORTFOLIO.NETWORK,
    Resumen: NAVIGATION_ROUTES.PORTFOLIO.RESUME,
  };

  const location = useLocation();
  const navigate = useNavigate();
  const { startExitAnimation } = useAnimationStore();

  const handleLinkClick = (to: string) => {
    if (location.pathname === `/${to}`) return onClickAction && onClickAction();
    startExitAnimation(to).finally(() => navigate(to !== "/" ? `/${to}` : "/"));
    onClickAction && onClickAction();
  };

  return (
    <>
      {Object.entries(routes).map(([label, to], index) => (
        <motion.button
          initial={{ opacity: 0, x: "10px" }}
          animate={{ opacity: 1, x: "0px", transition: { duration: 1, delay: 0.2 * index } }}
          exit={{ opacity: 0, x: "-10px", transition: { duration: 0.3, delay: 0.1 * index } }}
          className="link"
          key={index}
          onClick={() => handleLinkClick(to)}
          style={styles ?? {}}
        >
          {label}
        </motion.button>
      ))}
    </>
  );
};
