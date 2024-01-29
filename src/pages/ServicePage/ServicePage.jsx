import { Suspense, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// styled
import { Wrapper, Container, Main } from "./ServicePage.styled";
// components
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter/Filter";
import { Loader } from "../../components/Loader";
import { selectIsLoading } from "../../redux/auth/selectors";
import { getAllContacts } from "../../redux/contacts/ContactSlice";
import { getAllLists } from "../../redux/settingsUser/settingsUserSlice";

export const ServicePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      data.map(({ data }) => {
        Array.isArray(data)
          ? dispatch(getAllContacts(data))
          : dispatch(getAllLists(data));
      });
    }
  }, [data, dispatch]);

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
