import { useSupabaseStore } from "@store/supabase";
import { useEffect, useState } from "react";
import { useSupabaseStorage } from "src/hooks";

export const useDownloadCv = () => {
  const { getFilesInfo } = useSupabaseStore();
  const { downloadFile } = useSupabaseStorage();

  const [cvFilePath, setcvFilePath] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const asyncEffect = async () => {
      const files = await getFilesInfo();
      setcvFilePath(files.find(({ tag }) => tag === "cv")?.file_path ?? "");
      setisLoading(false);
    };
    asyncEffect();
  }, []);

  const downloadCv = async () => {
    const { data } = await downloadFile(cvFilePath);
    if (!data) return;
    const objectUrl = window.URL.createObjectURL(new Blob([data], { type: "application/pdf" }));
    const temporalLink = document.createElement("a");
    temporalLink.href = objectUrl;
    temporalLink.setAttribute("download", "Kevin_Leguiza_Gaggero-Cv.pdf");
    temporalLink.click();
  };

  return { downloadCv, isLoading };
};
