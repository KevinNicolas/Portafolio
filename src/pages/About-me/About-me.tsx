import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ExitPresence } from "@components";
import { useSupabaseStore } from "@store/supabase";

import { AboutmeStyles } from "./About-me.styles";

export const AboutMe = () => {
  const getAboutMeContent = useSupabaseStore(({ getAboutMeContents: getAboutMeContent }) => getAboutMeContent);
  const [aboutMeContent, setAboutMeContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchAboutMecontent = async () => {
      const aboutMeContents = (await getAboutMeContent()).map(({ content }) => content);
      setAboutMeContent(aboutMeContents.join(" "));
    };

    fetchAboutMecontent().finally(() => setIsLoading(false));
  }, []);

  return (
    <ExitPresence>
      <AboutmeStyles>
        <motion.div className="title-container" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: 0, transition: { duration: 1 } }}>
          <h3>Acerca de mi</h3>
        </motion.div>
        <div className="content">
          <motion.div
            className="brand"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
          >
            <img src="/images/avatar.png" alt="Avatar image" className="avatar-image" />
            <span>
              <span className="highlight">Frontend</span> developer
            </span>
          </motion.div>
          {!!aboutMeContent && (
            <motion.div
              className="about-me"
              initial={{ opacity: 0, maxWidth: "120ch" }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <p>{aboutMeContent}</p>
            </motion.div>
          )}
        </div>
      </AboutmeStyles>
    </ExitPresence>
  );
};
