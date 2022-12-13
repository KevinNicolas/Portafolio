import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FiLinkedin, FiGithub, FiMail, FiChevronsUp } from "react-icons/fi";
import { motion, useAnimationControls } from "framer-motion";

import { SocialMediaStyles } from "./Social-media.styles";

export const SocialMedia = () => {
  const socialMediaLinks: { className: string; href: string; icon: IconType }[] = [
    { className: "linkedin", href: "https://www.linkedin.com/in/kevin-nicolas-leguiza-gaggero-1460121b5/", icon: FiLinkedin },
    { className: "github", href: "https://github.com/KevinNicolas", icon: FiGithub },
    { className: "gmail", href: "mailto:nicolaskevinleguiza@gmail.com?Subject=Contactar", icon: FiMail },
  ];

  const socialMediaControl = useAnimationControls();

  useEffect(() => {
    socialMediaControl.start((i) => ({
      opacity: [0, 1],
      transition: { delay: 0.1 * i + 0.1, duration: 0.5 },
    }));
  }, []);

  return (
    <SocialMediaStyles>
      <div className="social-media-container">
        {socialMediaLinks.map(({ className, href, icon }, index) => (
          <motion.a
            key={index}
            custom={index}
            className={className}
            href={href}
            animate={socialMediaControl}
            initial={{ opacity: 0 }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 0.3, delay: 0.1 * socialMediaLinks.length - 0.1 * index }}
            target="_blank"
          >
            {icon({})}
          </motion.a>
        ))}
      </div>

      {/* <button onClick={() => setShowSocialMedia(!showSocialMedia)} className={`social-media-button ${showSocialMedia ? "active" : ""}`}>
        <FiChevronsUp />
      </button> */}
    </SocialMediaStyles>
  );
};
