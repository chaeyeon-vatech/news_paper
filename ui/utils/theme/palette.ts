export const colorTheme = {
  primary: "primary",
  secondary: "secondary",
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
  default: "default",
};

export type ColorType = keyof typeof colorTheme;

interface GrayBrightness {
  50: string;
  100: string;
  300: string;
  500: string;
  600: string;
  800: string;
  900: string;
}

interface BlueGrayBrightness {
  50: string;
  100: string;
  200: string;
  400: string;
  600: string;
  700: string;
  900: string;
}

interface BaseColor {
  bgColor: string;
  color: string;
}

interface Table {
  head: BaseColor;
}

interface ModeColors {
  base: BaseColor;
  select: BaseColor;
  sidebar: BaseColor;
  topbar: BaseColor;
  paper: BaseColor;
  dialog: BaseColor;
  dialogTitle: BaseColor;
  gray: GrayBrightness;
  blueGray: BlueGrayBrightness;
  table: Table;
}

interface Brightness {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
}

interface Colors {
  default: Brightness;
  primary: Brightness;
  secondary: Brightness;
  info: Brightness;
  success: Brightness;
  warning: Brightness;
  error: Brightness;
}

export interface Palette extends Colors, ModeColors {}

export const darkMode: ModeColors = {
  base: {
    bgColor: "#161C24",
    color: "#fff",
  },
  select: {
    bgColor: "#454F5B",
    color: "#fff",
  },
  sidebar: {
    bgColor: "#263238",
    color: "#C4CDD5",
  },
  topbar: {
    bgColor: "#161C24",
    color: "#C4CDD5",
  },
  paper: {
    bgColor: "#212B36",
    color: "#C4CDD5",
  },
  dialog: {
    bgColor: "#212B36",
    color: "#C4CDD5",
  },
  dialogTitle: {
    bgColor: "#263238",
    color: "#fff",
  },
  gray: {
    50: "#161C24",
    100: "#161C24",
    300: "#454F5B",
    500: "#919EAB",
    600: "#C4CDD5",
    800: "#F4F6F8",
    900: "#F9FAFB",
  },
  blueGray: {
    50: "#eceff1",
    100: "#cfd8dc",
    200: "#b0bec5",
    400: "#78909c",
    600: "#546e7a",
    700: "#455a64",
    900: "#263238",
  },
  table: {
    head: {
      bgColor: "#454F5B",
      color: "#C4CDD5",
    },
  },
};

export const lightMode: ModeColors = {
  base: { bgColor: "#fff", color: "#000" },
  select: {
    bgColor: "#fff",
    color: "#000",
  },
  sidebar: {
    bgColor: "#fff",
    color: "#637381",
  },
  topbar: {
    bgColor: "#fff",
    color: "#637381",
  },
  paper: {
    bgColor: "#fff",
    color: "#637381",
  },
  dialog: {
    bgColor: "#fff",
    color: "#637381",
  },
  dialogTitle: {
    bgColor: "#fff",
    color: "#000",
  },
  gray: {
    50: "#fafafa",
    100: "#f5f5f5",
    300: "#e0e0e0",
    500: "#9e9e9e",
    600: "#757575",
    800: "#424242",
    900: "#212121",
  },
  blueGray: {
    50: "#eceff1",
    100: "#cfd8dc",
    200: "#b0bec5",
    400: "#78909c",
    600: "#546e7a",
    700: "#455a64",
    900: "#263238",
  },
  table: {
    head: {
      bgColor: "#F4F6F8",
      color: "#eceff1",
    },
  },
};

export const mixMode: ModeColors = {
  base: { bgColor: "#fff", color: "#000" },
  select: {
    bgColor: "#fff",
    color: "#000",
  },
  sidebar: {
    bgColor: "#263238",
    color: "#C4CDD5",
  },
  topbar: {
    bgColor: "#161C24",
    color: "#C4CDD5",
  },
  paper: {
    bgColor: "#fff",
    color: "#637381",
  },
  dialog: {
    bgColor: "#fff",
    color: "#637381",
  },
  dialogTitle: {
    bgColor: "#263238",
    color: "#fff",
  },
  gray: {
    50: "#fafafa",
    100: "#f5f5f5",
    300: "#e0e0e0",
    500: "#9e9e9e",
    600: "#757575",
    800: "#424242",
    900: "#212121",
  },
  blueGray: {
    50: "#eceff1",
    100: "#cfd8dc",
    200: "#b0bec5",
    400: "#78909c",
    600: "#546e7a",
    700: "#455a64",
    900: "#263238",
  },
  table: {
    head: {
      bgColor: "#F4F6F8",
      color: "#637381",
    },
  },
};

export const green: Colors = {
  default: {
    lighter: "#F4F6F8",
    light: "#DFE3E8",
    main: "#546e7a",
    dark: "#919EAB",
    darker: "#637381",
  },
  primary: {
    lighter: "#ddf4f0",
    light: "#a9e3d8",
    main: "#00bfa5",
    dark: "#00a080",
    darker: "#008263",
  },
  secondary: {
    lighter: "#D6E4FF",
    light: "#84A9FF",
    main: "#3366FF",
    dark: "#1939B7",
    darker: "#091A7A",
  },
  info: {
    lighter: "#D0F2FF",
    light: "#74CAFF",
    main: "#1890FF",
    dark: "#0C53B7",
    darker: "#04297A",
  },
  success: {
    lighter: "#E9FCD4",
    light: "#AAF27F",
    main: "#54D62C",
    dark: "#229A16",
    darker: "#08660D",
  },
  warning: {
    lighter: "#FFF7CD",
    light: "#FFE16A",
    main: "#FFC107",
    dark: "#B78103",
    darker: "#7A4F01",
  },
  error: {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E",
  },
};

export const blue: Colors = {
  default: {
    lighter: "#F4F6F8",
    light: "#DFE3E8",
    main: "#546e7a",
    dark: "#919EAB",
    darker: "#637381",
  },
  primary: {
    lighter: "#D6E4FF",
    light: "#84A9FF",
    main: "#3366FF",
    dark: "#1939B7",
    darker: "#091A7A",
  },
  secondary: {
    lighter: "#C8FACD",
    light: "#5BE584",
    main: "#00AB55",
    dark: "#007B55",
    darker: "#005249",
  },
  info: {
    lighter: "#D0F2FF",
    light: "#74CAFF",
    main: "#1890FF",
    dark: "#0C53B7",
    darker: "#04297A",
  },
  success: {
    lighter: "#E9FCD4",
    light: "#AAF27F",
    main: "#54D62C",
    dark: "#229A16",
    darker: "#08660D",
  },
  warning: {
    lighter: "#FFF7CD",
    light: "#FFE16A",
    main: "#FFC107",
    dark: "#B78103",
    darker: "#7A4F01",
  },
  error: {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E",
  },
};

export const red: Colors = {
  default: {
    lighter: "#F4F6F8",
    light: "#DFE3E8",
    main: "#546e7a",
    dark: "#919EAB",
    darker: "#637381",
  },
  primary: {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E",
  },
  secondary: {
    lighter: "#D6E4FF",
    light: "#84A9FF",
    main: "#3366FF",
    dark: "#1939B7",
    darker: "#091A7A",
  },
  info: {
    lighter: "#D0F2FF",
    light: "#74CAFF",
    main: "#1890FF",
    dark: "#0C53B7",
    darker: "#04297A",
  },
  success: {
    lighter: "#E9FCD4",
    light: "#AAF27F",
    main: "#54D62C",
    dark: "#229A16",
    darker: "#08660D",
  },
  warning: {
    lighter: "#FFF7CD",
    light: "#FFE16A",
    main: "#FFC107",
    dark: "#B78103",
    darker: "#7A4F01",
  },
  error: {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E",
  },
};
