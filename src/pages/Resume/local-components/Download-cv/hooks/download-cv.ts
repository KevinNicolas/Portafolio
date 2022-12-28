import { useSupabaseStore } from "@store/supabase";
import { useEffect, useState } from "react";
import { useSupabaseStorage } from "src/hooks";

export const useDownloadCv = () => {
  const { getFilesInfo } = useSupabaseStore();
  const { downloadFile, getPublicUrl } = useSupabaseStorage();

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
    const href = getPublicUrl(cvFilePath);
    const temporalLink = document.createElement("a");
    temporalLink.href = href;
    temporalLink.target = "_blank";
    temporalLink.click();
  };

  return { downloadCv, isLoading };
};
