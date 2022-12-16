export interface DatabaseSchema {
  aboutme: AboutMeSchema;
  experience: ExperienceSchema;
  files: FilesSchema;
}

export interface AboutMeSchema {
  id: number;
  content: string;
}

export interface ExperienceSchema {
  id: number;
  from: string;
  to: string;
  title: string;
  description: string;
}

export interface FilesSchema {
  id: number;
  name: string;
  file_path: string;
  url: string | null;
  tag: "cv" | "project" | "default";
}
