import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// styled
import { Wrapper, Container, Main } from "./ServicePage.styled";
// components
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter/Filter";
import { Loader } from "../../components/Loader";
import { selectIsLoading } from "../../redux/auth/selectors";

export const ServicePage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Wrapper>
      <Header />
      <Main>
        <Container>
          <Filter />
          <Suspense fallback={<Loader isLoading={isLoading} />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};
