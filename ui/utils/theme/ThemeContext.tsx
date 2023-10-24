import "@emotion/react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import React, { createContext, Dispatch, useContext, useReducer } from "react";
import fonts, { Fonts } from "./fonts";
import {
  blue,
  darkMode,
  green,
  lightMode,
  mixMode,
  Palette,
  red,
} from "./palette";

type Stretch = "1200px" | "none";
export type Mode = "light" | "dark" | "mix";
type Presets = "green" | "blue" | "red";
export type SidebarStyle = "flat" | "icon";
type Direction = "ltr" | "rtl";

interface SidebarMotion {
  style: SidebarStyle;
  width: number;
  transitionDuration: string;
}

type Sidebar = Record<SidebarStyle, SidebarMotion>;

const sidebar: Sidebar = {
  flat: { style: "flat", width: 280, transitionDuration: "0.5s" },
  icon: { style: "icon", width: 80, transitionDuration: "0.5s" },
};

declare module "@emotion/react" {
  export interface Theme {
    palette: Palette;
    sidebar: SidebarMotion;
    layout: { minWidth: number };
    stretch: Stretch;
    mode: Mode;
    color: Presets;
    fonts: Fonts;
    direction: Direction;
  }
}

interface Theme {
  palette: Palette;
  sidebar: SidebarMotion;
  layout: { minWidth: number };
  stretch: Stretch;
  mode: Mode;
  color: Presets;
  fonts: Fonts;
  direction: Direction;
}

type Action =
  | { type: "SET_MODE"; mode: Mode }
  | { type: "SET_STRETCH"; stretch: boolean }
  | { type: "SET_COLOR"; color: Presets }
  | { type: "SET_SIDEBAR_STYLE"; style: SidebarStyle }
  | { type: "SET_DIRECTION"; direction: Direction };

type ThemeDispatch = Dispatch<Action>;

const ThemeStateContext = createContext<Theme | null>(null);
const ThemeDispatchContext = createContext<ThemeDispatch | null>(null);

function reducer(state: Theme, action: Action): Theme {
  switch (action.type) {
    case "SET_MODE":
      localStorage.setItem("mode", action.mode);

      const mode =
        action.mode === "dark"
          ? darkMode
          : action.mode === "mix"
          ? mixMode
          : lightMode;

      return {
        ...state,
        palette: { ...state.palette, ...mode },
        mode: action.mode,
      };

    case "SET_COLOR":
      const colors =
        action.color === "blue" ? blue : action.color === "red" ? red : green;
      localStorage.setItem("color", action.color);

      return {
        ...state,
        palette: { ...state.palette, ...colors },
        color: action.color,
      };
    case "SET_STRETCH":
      localStorage.setItem("stretch", `${action.stretch}`);

      return {
        ...state,
        stretch: action.stretch ? "none" : "1200px",
      };

    case "SET_SIDEBAR_STYLE":
      localStorage.setItem("sidebarStyle", action.style);

      return {
        ...state,
        sidebar: sidebar[action.style],
      };

    case "SET_DIRECTION":
      return {
        ...state,
        direction: action.direction,
      };

    default:
      throw new Error("Unhandled action");
  }
}

const getMode = () => {
  const mode = localStorage.getItem("mode");

  switch (mode) {
    case "light":
    case "dark":
    case "mix":
      return mode;
    default:
      return "mix";
  }
};

const getSidebarStyle = () => {
  const style = localStorage.getItem("sidebarStyle");

  switch (style) {
    case "flat":
    case "icon":
      return style;
    default:
      return "flat";
  }
};

const getPrimaryColor = () => {
  const primaryColor = localStorage.getItem("color");

  switch (primaryColor) {
    case "green":
    case "blue":
    case "red":
      return primaryColor;
    default:
      return "green";
  }
};

const getStretch = () => {
  return localStorage.getItem("stretch") === "false" ? false : true;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    palette: { ...green, ...lightMode },
    sidebar: sidebar.flat,
    layout: { minWidth: 330 },
    stretch: "none",
    mode: "mix",
    color: "green",
    fonts: fonts,
    direction: "ltr",
  });

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <EmotionThemeProvider theme={state}>{children}</EmotionThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useThemeState() {
  const state = useContext(ThemeStateContext);

  if (!state) throw new Error("Cannot find ThemeProvider"); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) throw new Error("Cannot find ThemeProvider"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
