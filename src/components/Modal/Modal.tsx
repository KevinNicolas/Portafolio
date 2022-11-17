import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactElement;
  closeModalCallback: () => void;
  showModal: boolean;
}

export const Modal = ({ children, closeModalCallback, showModal }: Props) => {
  const containerController = useAnimationControls();

  const [containerTimeout, setContainerTimeout] = useState<null | number>(null);

  const modalContentRef = useRef(null);

  // useEffect(() => {
  //   containerController.set({ zIndex: -1 });
  // }, []);
  // useEffect(() => {
  //   if (showModal) containerController.set({ zIndex: 9 });
  //   else {
  //     if (containerTimeout) clearTimeout(containerTimeout);
  //     setContainerTimeout(setTimeout(() => containerController.set({ zIndex: -1 }), 1000));
  //   }
  // }, [showModal]);

  const handleOverlayClick = (event: any) => {
    if (!(modalContentRef as any).current.contains(event.target)) closeModalCallback();
  };

  return (
    <AnimatePresence>
      {
        <motion.div
          initial={{
            opacity: 1,
            width: "100vw",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          animate={containerController}
          transition={{
            duration: 1,
          }}
        >
          <AnimatePresence>
            {showModal && (
              <motion.div
                initial={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "rgba(0 0 0 / .8)",
                  opacity: 1,
                  zIndex: 9,
                  overflow: "hidden",
                }}
                animate={{
                  height: ["1vh", "1vh", "100vh"],
                  width: ["0vw", "100vw", "100vw"],
                }}
                exit={{
                  height: ["100vh", "1vh", "0vh"],
                  width: ["100vw", "100vw", "0vw"],
                  transition: { duration: 0.7 },
                }}
                transition={{ duration: 0.7 }}
                onClick={(event) => handleOverlayClick(event)}
              >
                <div ref={modalContentRef}>{children}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      }
    </AnimatePresence>
  );
};
