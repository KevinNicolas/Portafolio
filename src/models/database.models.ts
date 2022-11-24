export interface DatabaseSchema {
  aboutme: AboutMeSchema;
  experience: ExperienceSchema;
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
