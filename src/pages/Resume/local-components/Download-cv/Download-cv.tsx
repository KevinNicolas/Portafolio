import { motion } from "framer-motion";

import { ExitPresence } from "@components";
import { useThemeStore } from "@store/theme";

import { DownloadCvStyles } from "./Download-cv.styles";

export const DownloadCv = () => {
  const { colors, profile } = useThemeStore();

  return (
    <ExitPresence>
      <DownloadCvStyles theme={colors}>
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          whileHover={{ filter: "brightness(1.2)", scale: 1.1, transition: { duration: 0.3 } }}
          whileTap={{ scale: 1.05, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
        >
          <span>
            Descargar CV (<span className="profile">{profile}</span>)
          </span>
        </motion.button>
      </DownloadCvStyles>
    </ExitPresence>
  );
};
