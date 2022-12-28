import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ExitPresence } from "@components";
import { useThemeStore } from "@store/theme";

import { ProjectStyles } from "./Project.styles";
import { useSupabaseStore } from "@store/supabase";
import { FilesSchema } from "@models";
import { useSupabaseStorage } from "src/hooks";
interface ProjectInfo {
  image: string;
  name: string;
  url: string;
}
const projects: { react: ProjectInfo[]; vue: ProjectInfo[] } = {
  react: [
    {
      image: "https://photos5.appleinsider.com/gallery/49201-96066-apple-weather-on-iPad-xl.jpg",
      name: "Weather app",
      url: "#",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      name: "React project",
      url: "#",
    },
    {
      image: "https://www.xenonstack.com/hubfs/xenonstack-reactjs-project-structure.png",
      name: "Automation project",
      url: "#",
    },
  ],
  vue: [
    {
      image: "https://833250.smushcdn.com/1694534/wp-content/uploads/2020/03/1-7af8b2924fdef21223d86dda3dba51e9530ba65096cdbae51befaec57836e07f-2.png?lossy=1&strip=1&webp=1",
      name: "Weather app",
      url: "#",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwrjuRJnHDTTtq4HbWoCcgzv71-5sjC9I3w&usqp=CAU",
      name: "Todo app",
      url: "#",
    },
    {
      image: "https://miro.medium.com/max/1200/1*Gb0HLf6szo9QCqcNHiBybA.png",
      name: "Chat app",
      url: "#",
    },
  ],
};

export const Projects = () => {
  const { profile, colors } = useThemeStore();
  const { getPublicUrl } = useSupabaseStorage();
  const getFilesInfo = useSupabaseStore(({ getFilesInfo }) => getFilesInfo);

  const [projectsToShow, setProjectsToShow] = useState(projects[profile]);
  const [projectsInfo, setprojectsInfo] = useState<FilesSchema[]>([]);

  useEffect(() => {
    setProjectsToShow(projects[profile]);
    const asyncEffect = async () => {
      const filesInfo = await getFilesInfo();
      setprojectsInfo(filesInfo.filter(({ tag }) => tag === "project").splice(0, 3));
    };
    asyncEffect();
  }, [profile]);

  return (
    <ExitPresence>
      <ProjectStyles theme={colors}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} viewport={{ once: true }} exit={{ opacity: 0, transition: { duration: 1 } }}>
          Algunos proyectos creados con <span className="profile">{profile}</span>
        </motion.h2>
        <div className="projects">
          {projectsInfo.map(({ name, url, file_path }, index) => (
            <motion.div
              key={index}
              className="project-container"
              initial={{ opacity: 0, scale: 0, border: "2px solid white" }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 * index } }}
              viewport={{ once: true }}
              whileHover={{ borderColor: colors.primary, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
            >
              <motion.a
                target="_blank"
                href={url ?? ""}
                initial={{ width: "100%", height: "100%", display: "flex", placeContent: "center", flexDirection: "column", textAlign: "center", gap: "2ch" }}
              >
                <img src={getPublicUrl(file_path)} alt="Project image" />
                <span>{name}</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </ProjectStyles>
    </ExitPresence>
  );
};
