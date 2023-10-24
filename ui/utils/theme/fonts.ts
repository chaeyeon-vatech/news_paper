export interface Fonts {
  fontFamily: string;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: Font;
  h2: Font;
  h3: Font;
  h4: Font;
  h5: Font;
  h6: Font;
  subtitle1: Font;
  subtitle2: Font;
  body1: Font;
  body2: Font;
  button1: Font;
  button2: Font;
  caption: Font;
  overline: Font;
  // [index: string]: Font;
}

interface Font {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
  textTransform?: "none" | "uppercase" | "capitalize";
  // [index: "string"]: string;
}

const FONT_PRIMARY = "Noto Sans";

const fonts: Fonts = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: "44px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  h2: {
    fontSize: "34px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  h3: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  h4: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  h5: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  h6: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  subtitle1: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  subtitle2: {
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  body1: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  body2: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  button1: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "normal",
    // textTransform: "uppercase",
  },
  button2: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "normal",
    // textTransform: "uppercase",
  },
  caption: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  overline: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "18px",
    letterSpacing: "normal",
    textTransform: "uppercase",
  },
};

export default fonts;
