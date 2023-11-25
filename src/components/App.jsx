// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
// import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "../constants";
// theme style
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../index.styled";
import { theme } from "../constants/theme";
// components
import { AuthLayout } from "./AuthLayout";
// import { HomePage } from "../pages/HomePage";
// import { AuthForm } from "./AuthForm";
import { Login, loader as loginLoader } from "./Login";
import { Register } from "./Register";
import { authRequiredLoader } from "./AuthRequired";
import { ServicePage } from "../pages/ServicePage";
import { ErrorPage } from "../pages/ErrorPage";

export const App = () => {
  // const [currentTheme, setCurrentTheme] = useState("light");

  // const toggleTheme = () => {
  //   setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  // };

  const router = createBrowserRouter(
    [
      {
        path: PATHS.BASE,
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Login />, loader: loginLoader },
          { path: PATHS.LOGIN, element: <Login /> },
          { path: PATHS.REGISTER, element: <Register /> },
        ],
      },
      {
        path: PATHS.CONTACTS,
        loader: authRequiredLoader,
        element: <ServicePage />,
      },
    ],
    { basename: "/tservice" }
  );

  return (
    <ThemeProvider theme={theme["light"]}>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/* <BrowserRouter basename="/tservice">
      <Routes>
        <Route path={PATHS.BASE} element={<Layout toggleTheme={toggleTheme} />}>
          <Route index element={<AuthPage />} />
          <Route path={PATHS.LOGIN} element={<AuthForm />} />
          <Route path={PATHS.REGISTER} element={<AuthForm />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
      */}
    </ThemeProvider>
  );
};
