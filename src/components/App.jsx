import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import debounce from "lodash.debounce";
// theme style
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../index.styled";
import { theme } from "../constants/theme";
// components
import { PATHS } from "../constants";
import { AuthLayout } from "./AuthLayout";
import { Login } from "./Login";
import { Register } from "./Register";
import { ServicePage } from "../pages/ServicePage";
import { WorkTable } from "./WorkTable";
import { LoaderPretty } from "./LoaderPretty";
import { ResetPassForm } from "./AuthResetPass";
import { NewPassForm } from "./NewPassForm";
import { ErrorPage } from "../pages/ErrorPage";
import { selectTheme } from "../redux/auth/selectors";
// loaders
import { loader as loaderAuthLayout } from "./AuthLayout";
import { loader as authRequiredLoader } from "./AuthRequired";
import { loaderArchive as authRequiredLoaderArchive } from "./AuthRequired";
import { loader as newPassFormLoader } from "./NewPassForm";
import { device } from "../redux/settingsUser/settingsUserSlice";
import { ConfirmServiceProvider } from "./ConfirmService/ConfirmServiceProvider";

export const App = () => {
  const [viewportWidth, setViewportWidth] = useState(
    window.innerWidth <= 500 ? "mobile" : "desktop"
  );

  const currentTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setViewportWidth("mobile");
      } else {
        setViewportWidth("desktop");
      }
    };
    window.addEventListener(
      "resize",
      debounce(handleResize, 500, { leading: true })
    );

    dispatch(device(viewportWidth));
  }, [dispatch, viewportWidth]);

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
          { path: PATHS.RESET, element: <ResetPassForm /> },
          {
            path: `${PATHS.RESET}/:token`,
            element: <NewPassForm />,
            loader: newPassFormLoader,
          },
        ],
      },
      {
        path: PATHS.SERVICES,
        element: <ServicePage />,
        loader: authRequiredLoader,
        children: [
          { index: true, element: <WorkTable /> },
          // {
          //   path: `${PATHS.SERVICES}/${PATHS.ARCHIVE}`,
          //   element: <WorkTable />,
          // },
          // { path: `${PATHS.SERVICES}/:id`, element: <div>Something</div> },
        ],
      },
      {
        path: PATHS.ARCHIVE,
        element: <ServicePage />,
        loader: authRequiredLoaderArchive,
        children: [{ index: true, element: <WorkTable /> }],
      },
    ],
    { basename: "/tservice" }
  );

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <ConfirmServiceProvider>
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
          <RouterProvider
            router={router}
            fallbackElement={<LoaderPretty />}
            future={{ v7_startTransition: true }}
          />
        </ConfirmServiceProvider>
      </ThemeProvider>
    </>
  );
};
