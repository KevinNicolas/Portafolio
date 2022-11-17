import { SupabaseClient } from "@supabase/supabase-js";
import { AboutMeSchema, ExperienceSchema } from "../models";

function getFromDatabase(supabase: SupabaseClient<any, "public", any>, table: "aboutme", select?: (keyof AboutMeSchema)[]): Promise<AboutMeSchema[]>;
function getFromDatabase(supabase: SupabaseClient<any, "public", any>, table: "experience", select?: (keyof ExperienceSchema)[]): Promise<ExperienceSchema[]>;

async function getFromDatabase(supabase: unknown, table: unknown, select?: unknown): Promise<AboutMeSchema[] | ExperienceSchema[]> {
  let selectQuery = "*";

  if (select) selectQuery = (<string[]>select).join(", ");

  const { data, error } = await (<SupabaseClient>supabase).from(<string>table).select(selectQuery);

  if (error) {
    console.error(error);
    return [];
  }

  return data as any;
}

export default getFromDatabase;
