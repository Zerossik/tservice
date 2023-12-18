import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
// import { Loader } from "./Loader";
import { LoaderPretty } from "./LoaderPretty";
import { ResetPassForm } from "./AuthResetPass";
import { NewPassForm } from "./NewPassForm";
import { ErrorPage } from "../pages/ErrorPage";
import { selectTheme } from "../redux/auth/selectors";
// loaders
import { loader as loaderAuthLayout } from "./AuthLayout";
import { loader as loaderWorkTable } from "./WorkTable";
import { loader as authRequiredLoader } from "./AuthRequired";
import { loader as newPassFormLoader } from "./NewPassForm";

export const App = () => {
  const currentTheme = useSelector(selectTheme);

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
          { index: true, element: <WorkTable />, loader: loaderWorkTable },
          { path: `${PATHS.SERVICES}/:id`, element: <div>Something</div> },
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
      <RouterProvider
        router={router}
        // fallbackElement={<Loader isLoading={true} />}
        fallbackElement={<LoaderPretty />}
        future={{ v7_startTransition: true }}
      />
    </ThemeProvider>
  );
};
