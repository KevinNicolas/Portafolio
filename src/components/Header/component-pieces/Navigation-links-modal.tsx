import { motion, AnimatePresence } from "framer-motion";

import { Modal } from "@components";
import { NavigationLinks } from "./Navigation-links";
import { useEffect, useState } from "react";

interface Props {
  closeCallback: () => void;
  showModal: boolean;
}

export const NavigationLinksModal = ({ closeCallback, showModal }: Props) => {
  const [mountModal, setMountModal] = useState(showModal);

  useEffect(() => {
    if (showModal) setMountModal(true);
  }, [showModal]);

  const closeModalCallback = () => {
    setMountModal(false);
    setTimeout(() => closeCallback(), 1000);
  };

  return showModal ? (
    <Modal closeModalCallback={closeModalCallback} showModal={mountModal}>
      <AnimatePresence>
        <motion.div
          initial={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            width: "280px",
            height: "460px",
            background: "rgba(20 20 20 / .9)",
            borderRadius: "5px",
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.35 },
          }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <NavigationLinks styles={{ background: "transparent", fontSize: "1.5rem" }} onClickAction={closeModalCallback} />
        </motion.div>
      </AnimatePresence>
    </Modal>
  ) : (
    <></>
  );
};
