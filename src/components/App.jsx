// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PATHS } from "../constants";
// theme style
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../index.styled";
import { theme } from "../constants/theme";
// components
import { AuthLayout } from "./AuthLayout";
import { Login } from "./Login";
import { Register } from "./Register";
import { ServicePage } from "../pages/ServicePage";
import { GadgetList } from "./GadgetList/GadgetList";
import { ErrorPage } from "../pages/ErrorPage";
import { selectIsLogin } from "../redux/auth/selectors";
// loaders
import { loader as loaderAuthLayout } from "./AuthLayout";
import { loader as loaderGadgetList } from "./GadgetList";
import { loader as authRequiredLoader } from "./AuthRequired";

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const isLoggedIn = useSelector(selectIsLogin);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const router = createBrowserRouter(
    [
      {
        path: PATHS.BASE,
        element: <AuthLayout />,
        loader: loaderAuthLayout,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Login /> },
          { path: PATHS.LOGIN, element: <Login /> },
          { path: PATHS.REGISTER, element: <Register /> },
        ],
      },
      {
        path: PATHS.CONTACTS,
        loader: (locationParams) => {
          return authRequiredLoader(isLoggedIn, locationParams);
        },
        element: <ServicePage toggleTheme={toggleTheme} />,
        children: [
          { index: true, element: <GadgetList />, loader: loaderGadgetList },
          { path: `${PATHS.CONTACTS}/:id`, element: <div>Something</div> },
        ],
      },
    ],
    { basename: "/tservice" }
  );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme={currentTheme === "light" ? "dark" : "light"}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
