const lightTheme = {
  primary: "#121417", //titles
  secondary: "#007aff", // blue
  third: "#ff8500", // orange
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
  // modal
  modalBg: "#e3e5e8",
  // input
  placeholder: "rgba(18, 20, 23, 0.5)",
  readOnlyBg: "#e5e5e5",
  // link
  link: "#007aff",
  // logo
  logo: "#0b68f3",
  // icons
  iconMain: "rgba(18, 20, 23, 0.8)",
  iconPlus: "#34C759",
  // table
  tableHead: "#3395ff",
  tableCell: "#F4F3F3",
  tableFont: "#121417",
  // loader
  loader: "#0b68f3", // spinner Loader
  // backDrop
  backDrop: "rgba(0, 0, 0, 0.2)",
  // footer
  footerFont: "rgba(0, 0, 0, 0.5)",
  // border
  border: "rgba(0, 0, 0, 0.2)",
  // error
  error: "#ff8500",
  // shadow
  shadow: `0px 10px 10px 0px rgba(0, 0, 0, 0.1),
    0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)`,
  shadowSecond:
    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
};

const darktheme = {
  // primary: "rgb(250, 250, 250)",
  primary: "rgb(209, 210, 211)",
  secondary: "#007aff", // blue
  third: "#ff8500", // orange
  bg: "#1E1E1E",
  // bgSecondary: "rgba(0, 0, 0, 0.8)",
  bgSecondary: "#2C2C2C",
  // header
  headerBg: "#e9f3ff", // need to change
  // button
  btnBg: "#3395ff",
  btnBorder: "none",
  btnFont: "#fff",
  // dropDown
  dropDownBg: "#191919", // need to change
  dropDownHover: "#333",
  // modal
  modalBg: "#191919",
  // input
  placeholder: "rgba(255, 255, 255, 0.5)",
  readOnlyBg: "#222",
  // link
  link: "#3395ff",
  // logo
  logo: "#0b68f3", // the same in dark and light theme
  // icons
  iconMain: "rgba(255, 255, 255, 0.8)",
  iconPlus: "#33ff9d",
  // table
  tableHead: "#3395ff",
  tableCell: "#2C2C2C",
  tableFont: "#121417",
  // loader
  loader: "#0b68f3", // spinner Loader
  // backDrop
  backDrop: "rgba(0, 0, 0, 0.2)",
  // footer
  footerFont: "rgba(255, 255, 255, 0.5)",
  // border
  border: "rgba(255, 255, 255, 0.10)",
  // error
  error: "#ff8500",
  // shadow
  shadow: "none",
  shadowSecond:
    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
};

const defaultTheme = {
  font: {
    primary: "Montserrat, sans-serif",
    logo: "Archivo Black, sans-serif",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  },
  borderRadius: {
    superSmall: "4px",
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
