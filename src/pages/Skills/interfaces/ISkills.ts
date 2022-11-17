import { IconType } from "react-icons";

export type HSL = [number, number, number];

export interface ISkill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  color: HSL;
  name: string;
  content: ISkill[] | Record<string, ISkill[]>;
}

export type SkillListModel = SkillCategory[];
