import { createClient, SupabaseClient } from "@supabase/supabase-js";
import create from "zustand";
import { AboutMeSchema, ExperienceSchema, FilesSchema } from "@models";

import getFromDatabase from "./utils/get-from-database";

interface SupabaseStore {
  supabaseClient: SupabaseClient<any, "public", any>;
  getAboutMeContents: () => Promise<AboutMeSchema[]>;
  getExperiences: () => Promise<ExperienceSchema[]>;
  getFilesInfo: () => Promise<FilesSchema[]>;
}

export const useSupabaseStore = create<SupabaseStore>((set, get) => ({
  supabaseClient: createClient(import.meta.env.VITE_SUPABASE_BASE_URL, import.meta.env.VITE_SUPABASE_SECRET_KEY),
  getAboutMeContents: () => getFromDatabase(get().supabaseClient, "aboutme"),
  getExperiences: () => getFromDatabase(get().supabaseClient, "experience"),
  getFilesInfo: () => getFromDatabase(get().supabaseClient, "files"),
}));
