import { useSupabaseStore } from "@store/supabase";

export const useSupabaseStorage = () => {
  const { supabaseClient } = useSupabaseStore();
  const bucketName = "portfolio";

  const getPublicUrl = (filePath: string) => supabaseClient.storage.from(bucketName).getPublicUrl(filePath).data.publicUrl;
  const downloadFile = async (filePath: string) => await supabaseClient.storage.from(bucketName).download(filePath);

  return { getPublicUrl, downloadFile };
};
