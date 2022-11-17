import { Colors, darkTheme } from "@assets/styles/Theme";
import create from "zustand";

interface ThemeStore {
  profile: "react" | "vue";
  colors: Colors;

  changeTheme: (newColors: Colors) => void;
  setThemeByProfile: (profile: "react" | "vue") => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  // States
  profile: "react",
  colors: darkTheme,

  // Actions
  changeTheme: (newColors) => set((state) => ({ ...state, colors: newColors })),
  setThemeByProfile: (profile) => {
    const primary = profile === "react" ? "#028fff" : profile === "vue" ? "#42b883" : "#028fff";
    return set((state) => ({ ...state, colors: { ...state.colors, primary }, profile }));
  },
}));
