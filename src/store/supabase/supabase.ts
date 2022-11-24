import { createClient, SupabaseClient } from "@supabase/supabase-js";
import create from "zustand";
import { AboutMeSchema, ExperienceSchema } from "@models";

import getFromDatabase from "./utils/get-from-database";

interface SupabaseStore {
  supabaseClient: SupabaseClient<any, "public", any>;
  getAboutMeContents: () => Promise<AboutMeSchema[]>;
  getExperiences: () => Promise<ExperienceSchema[]>;
}

export const useSupabaseStore = create<SupabaseStore>((set, get) => ({
  supabaseClient: createClient(import.meta.env.VITE_SUPABASE_BASE_URL, import.meta.env.VITE_SUPABASE_SECRET_KEY),
  getAboutMeContents: () => getFromDatabase(get().supabaseClient, "aboutme"),
  getExperiences: () => getFromDatabase(get().supabaseClient, "experience"),
}));
