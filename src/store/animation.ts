import create from "zustand";

interface AnimationStore {
  exit: boolean;
  navigatingTo?: string;

  setExit: (exit?: boolean) => void;
  startExitAnimation: (navigatingTo: string, animationDurationMs?: number) => Promise<void>;
}

export const useAnimationStore = create<AnimationStore>((set) => ({
  exit: false,
  navigatingTo: undefined,

  setExit: (exit?) => set((state) => ({ ...state, exit: exit ?? !state.exit })),
  startExitAnimation: (navigatingTo: string, animationDurationMs = 1000) =>
    new Promise((resolve) => {
      set(() => ({ ...StaticRange, exit: true, navigatingTo }));
      setTimeout(() => resolve(set((state) => ({ ...state, exit: false, navigatingTo: undefined }))), animationDurationMs);
    }),
}));
