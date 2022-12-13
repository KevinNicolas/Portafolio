import styled from "styled-components";
import { motion } from "framer-motion";

export const CursorStyles = styled(motion.div)<{ cursorSize: number }>`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  width: ${({ cursorSize }) => `${cursorSize}px`};
  height: ${({ cursorSize }) => `${cursorSize}px`};
  border-radius: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  background: rgba(255 255 255 / 0.05);
  box-shadow: 5px 5px 30px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(1px);
  filter: brightness(0.95);
  pointer-events: none;
  animation: rotate 3s linear infinite;
  display: flex;
  place-content: center;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const CursorPointer = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: white;
  margin: auto;
`;
