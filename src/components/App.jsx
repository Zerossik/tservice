// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// theme style
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../index.styled";
import { theme } from "../constants/theme";
// components
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout toggleTheme={toggleTheme} />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
