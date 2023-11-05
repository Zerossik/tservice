const lightTheme = {
  primary: "#121417", //titles
  secondary: "#3470FF", // blue
  bg: "#fff", // fon
};

const darktheme = {
  primary: "#fff",
  secondary: "#3470FF",
  bg: "#121417",
};

const defaultTheme = {
  font: {
    primary: "Manrope, sans-serif",
    secondary: "Montserrat, sans-serif",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  },
  borderRadius: {
    extraSmall: "8px",
    small: "12px",
    medium: "14px",
    large: "24px",
    xxl: "35px",
  },
};

export const theme = {
  light: {
    color: lightTheme,
    ...defaultTheme,
  },
  dark: {
    color: darktheme,
    ...defaultTheme,
  },
};
