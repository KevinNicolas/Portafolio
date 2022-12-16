import { motion } from "framer-motion";

import { ExitPresence } from "@components";
import { useThemeStore } from "@store/theme";

import { DownloadCvStyles } from "./Download-cv.styles";
import { useSupabaseStorage } from "src/hooks";
import { useSupabaseStore } from "@store/supabase";
import { useEffect, useState } from "react";

export const DownloadCv = () => {
  const { colors, profile } = useThemeStore();
  const { getFilesInfo } = useSupabaseStore();
  const { downloadFile } = useSupabaseStorage();

  const [cvFilePath, setcvFilePath] = useState("");

  useEffect(() => {
    const asyncEffect = async () => {
      const files = await getFilesInfo();
      setcvFilePath(files.find(({ tag }) => tag === "cv")?.file_path ?? "");
    };
    asyncEffect();
  }, []);

  const handleDownloadCv = async () => {
    const { data } = await downloadFile(cvFilePath);
    if (!data) return;
    const objectUrl = window.URL.createObjectURL(new Blob([data], { type: "application/pdf" }));
    const temporalLink = document.createElement("a");
    temporalLink.href = objectUrl;
    temporalLink.setAttribute("download", "Kevin_Leguiza_Gaggero-Cv.pdf");
    temporalLink.click();
  };

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
          <span onClick={handleDownloadCv}>
            Descargar CV (<span className="profile">{profile}</span>)
          </span>
        </motion.button>
      </DownloadCvStyles>
    </ExitPresence>
  );
};
