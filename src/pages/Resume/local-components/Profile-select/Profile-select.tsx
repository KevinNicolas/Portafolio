import { useEffect, useState } from "react";
import { SiR, SiReact, SiVuedotjs } from "react-icons/si";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

import { ExitPresence } from "@components";

import { ProfileSelectStyles } from "./Profile-select.styles";

export const ProfileSelect = () => {
  const [profile, setProfile] = useState<"react" | "vue">("react");
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    const profile: "react" | "vue" = (searchParam.get("profile") as "react" | "vue") ?? "react";
    setProfile(profile);
  }, [searchParam]);

  const handleChangeProfile = (profile: "react" | "vue") => {
    if (profile === "react") {
      setSearchParam("profile=react");
    }
    if (profile === "vue") {
      setSearchParam("profile=vue");
    }
  };

  return (
    <ExitPresence>
      <ProfileSelectStyles>
        <motion.button
          className={`react ${profile === "react" && "active"}`}
          initial={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            background: "transparent",
            scale: 0,
            opacity: 0,
          }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
          onClick={() => handleChangeProfile("react")}
        >
          <SiReact />
          <span>React Js</span>
        </motion.button>
        <motion.button
          className={`vue ${profile === "vue" && "active"}`}
          initial={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            background: "transparent",
            scale: 0,
            opacity: 0,
          }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
          onClick={() => handleChangeProfile("vue")}
        >
          <SiVuedotjs />
          <span>Vue Js</span>
        </motion.button>
        {/* <motion.button
          type="button"
          className={`react ${profile === "react" && "active"}`}
          onClick={() => profile !== "react" && handleChangeProfile("react")}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.8 } }}
        >
          <SiReact />
          <span>React Js</span>
        </motion.button>

        <motion.button
          className={`vue ${profile === "vue" && "active"}`}
          onClick={() => profile !== "vue" && handleChangeProfile("vue")}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.8 } }}
        >
          <SiVuedotjs />
          <span>Vue Js</span>
        </motion.button> */}
      </ProfileSelectStyles>
    </ExitPresence>
  );
};
