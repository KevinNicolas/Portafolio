import { useCursorAnimation } from "./Cursor.hook";
import { CursorPointer, CursorStyles } from "./Cursor.styles";

export const Cursor = () => {
  const { animationControl, cursorSize } = useCursorAnimation();

  return (
    <CursorStyles animate={animationControl} cursorSize={cursorSize}>
      <CursorPointer />
    </CursorStyles>
  );
};
