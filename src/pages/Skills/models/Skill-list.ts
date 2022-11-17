import { ISkill, SkillListModel } from "../interfaces/ISkills";
import {
  SiApollographql,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPrisma,
  SiReact,
  SiReactivex,
  SiSass,
  SiSequelize,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

import { FiGlobe } from "react-icons/fi";

const generalTecnologies: ISkill[] = [
  {
    name: "NodeJs",
    icon: SiNodedotjs,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "Javascript",
    icon: SiJavascript,
  },
  {
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    name: "ReactiveX",
    icon: SiReactivex,
  },
];

const frontendTecnologies: Record<string, ISkill[]> = {
  General: [
    {
      name: "Html",
      icon: SiHtml5,
    },
    {
      name: "Css",
      icon: SiCss3,
    },
  ],

  Frameworks: [
    {
      name: "ReactJs",
      icon: SiReact,
    },
    {
      name: "Vue",
      icon: SiVuedotjs,
    },
    {
      name: "NuxtJs",
      icon: SiNuxtdotjs,
    },
  ],

  Css: [
    {
      name: "Styled-components",
      icon: SiStyledcomponents,
    },
    {
      name: "TailwindCss",
      icon: SiTailwindcss,
    },
    {
      name: "Sass",
      icon: SiSass,
    },
  ],

  Http: [
    {
      name: "Rest",
      icon: FiGlobe,
    },
    {
      name: "GraphQl",
      icon: SiGraphql,
    },
  ],
};

const backendTecnologies: Record<string, ISkill[]> = {
  Frameworks: [
    {
      name: "NestJs",
      icon: SiNestjs,
    },
    {
      name: "Express",
      icon: SiExpress,
    },
    {
      name: "Apollo",
      icon: SiApollographql,
    },
  ],
  Orm: [
    {
      name: "Prisma",
      icon: SiPrisma,
    },
    {
      name: "Sequelize",
      icon: SiSequelize,
    },
  ],
};

export const SkillList: SkillListModel = [
  {
    color: [85, 100, 30],
    content: generalTecnologies,
    name: "General",
  },
  {
    color: [184, 75, 40],
    content: frontendTecnologies,
    name: "Frontend",
  },
  {
    color: [0, 90, 42],
    content: backendTecnologies,
    name: "Backend",
  },
];
