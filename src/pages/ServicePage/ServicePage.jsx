import { Suspense, useEffect } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
// styled
import { Wrapper, Container, Main } from "./ServicePage.styled";
// components
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter/Filter";
import { getAllContacts } from "../../redux/contacts/ContactSlice";
import { getAllLists } from "../../redux/settingsUser/settingsUserSlice";
import { LoaderPretty } from "../../components/LoaderPretty";

export const ServicePage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
    <>
      {navigation.location && <LoaderPretty />}
      <Wrapper>
        <Header />
        <Main>
          <Container>
            <Filter />
            <Suspense fallback={<LoaderPretty />}>
              <Outlet />
            </Suspense>
          </Container>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
};
