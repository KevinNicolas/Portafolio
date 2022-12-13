import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const useCursorAnimation = () => {
  const initialCursorSize = 40;
  const [cursorSize, setcursorSize] = useState(initialCursorSize);
  const animationControl = useAnimation();

  const calculateSize = (size: number) => size * 0.6;
  const calculatePositionInPx = (position: number, newCusorSize = cursorSize) => `${position - newCusorSize / 2}px`;
  const calculateSizeInPx = (size: number) => `${calculateSize(size)}px`;
  const easingFc = (x: number): number => 1 - Math.pow(1 - x, 3);

  const handleMouseMove = (mouseEvent: MouseEvent) => {
    const { clientX: left, clientY: top } = mouseEvent;

    animationControl.start({
      left: calculatePositionInPx(left),
      top: calculatePositionInPx(top),
      opacity: 1,
      transition: { duration: 0.3, ease: easingFc },
    });
  };

  const handleMouseDown = (mouseEvent: MouseEvent) => {
    const newCursorSize = calculateSize(cursorSize);
    setcursorSize(newCursorSize);

    const { clientX: left, clientY: top } = mouseEvent;
    animationControl.start({
      width: calculateSizeInPx(cursorSize),
      height: calculateSizeInPx(cursorSize),
      left: calculatePositionInPx(left, newCursorSize),
      top: calculatePositionInPx(top, newCursorSize),
      transition: { transition: { duration: 0.1, ease: easingFc } },
    });
  };

  const handleMouseUp = (mouseEvent: MouseEvent) => {
    const { clientX: left, clientY: top } = mouseEvent;

    animationControl.start({
      width: initialCursorSize,
      height: initialCursorSize,
      left: calculatePositionInPx(left, initialCursorSize),
      top: calculatePositionInPx(top, initialCursorSize),
      transition: { transition: { duration: 0.1, ease: easingFc } },
    });
    setcursorSize(initialCursorSize);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  return { animationControl, cursorSize };
};
