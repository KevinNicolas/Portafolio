import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSupabaseStore } from "@store/supabase";

import { ExitPresence } from "@components";
import { useThemeStore } from "@store/theme";

import { useSupabaseStorage } from "src/hooks";
import { DownloadCvStyles } from "./Download-cv.styles";
import { useDownloadCv } from "./hooks";

export const DownloadCv = () => {
  const { colors, profile } = useThemeStore();
  const { getFilesInfo } = useSupabaseStore();
  const { downloadFile } = useSupabaseStorage();
  const { downloadCv, isLoading } = useDownloadCv();

  const [cvFilePath, setcvFilePath] = useState("");

  useEffect(() => {
    const asyncEffect = async () => {
      const files = await getFilesInfo();
      setcvFilePath(files.find(({ tag }) => tag === "cv")?.file_path ?? "");
      console.info(cvFilePath);
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
          {isLoading ? (
            <span className="profile">Loading...</span>
          ) : (
            <span onClick={downloadCv}>
              Descargar CV (<span className="profile">{profile}</span>)
            </span>
          )}
        </motion.button>
      </DownloadCvStyles>
    </ExitPresence>
  );
};
