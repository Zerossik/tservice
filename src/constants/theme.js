const lightTheme = {
  primary: "#121417", //titles
  secondary: "#007aff", // blue
  bg: "#a7b3c7", // fon
  bgSecondary: "rgba(255, 255, 255, 0.8)",
  // header
  headerBg: "#e9f3ff",
  // button
  btnBg: "#007aff",
  btnBorder: "rgba(255, 255, 255, 0.1)",
  btnFont: "#fff",
  // dropDown
  dropDownBg: "#fff",
  dropDownHover: "#e5e5e5",
  // input
  placeholder: "rgba(18, 20, 23, 0.5)",
  // link
  link: "#007aff",
  // logo
  logo: "#0b68f3",
  // icons
  iconMain: "rgba(18, 20, 23, 0.8)",
  // table
  tableHead: "#3395ff",
  // loader
  loader: "#0b68f3", // spinner
  // backDrop
  backDrop: "rgba(0, 0, 0, 0.3)",
  // footer
  footerFont: "rgba(0, 0, 0, 0.5)",
  // border
  border: "rgba(255, 255, 255, 0.5)",
  // error
  error: "#ff8500",
  // shadow
  shadow: `0px 10px 10px 0px rgba(0, 0, 0, 0.1),
    0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)`,
};

const darktheme = {
  primary: "#fff",
  secondary: "#007aff", // need to change
  bg: "#050505",
  bgSecondary: "rgba(0, 0, 0, 0.8)",
  // header
  headerBg: "#e9f3ff", // need to change
  // button
  btnBg: "#3395ff",
  btnBorder: "none",
  btnFont: "#fff",
  // dropDown
  dropDownBg: "#191919", // need to change
  dropDownHover: "#333",
  // input
  placeholder: "rgba(255, 255, 255, 0.5)",
  // link
  link: "#3395ff",
  // logo
  logo: "#0b68f3", // the same in dark and light theme
  // icons
  iconMain: "rgba(255, 255, 255, 0.8)",
  // table
  tableHead: "#3395ff",
  // loader
  loader: "#0b68f3",
  // backDrop
  backDrop: "rgba(0, 0, 0, 0.3)",
  // footer
  footerFont: "rgba(255, 255, 255, 0.5)",
  // border
  border: "rgba(255, 255, 255, 0.10)",
  // error
  error: "#ff8500",
  // shadow
  shadow: "none",
};

const defaultTheme = {
  font: {
    primary: "Montserrat, sans-serif",
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
    medium: "16px",
    large: "24px",
    xxl: "36px",
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
