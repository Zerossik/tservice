import { Suspense, useEffect } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// styled
import { Wrapper, Container, Main } from "./ServicePage.styled";
// components
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter/Filter";
import { getAllContacts } from "../../redux/contacts/ContactSlice";
import { getAllLists } from "../../redux/settingsUser/settingsUserSlice";
import { LoaderPretty } from "../../components/LoaderPretty";
import { Pagination } from "../../components/Pagination";
import { selectIsTableVisible } from "../../redux/contacts/selectors";

export const ServicePage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [contacts, lists] = useLoaderData();
  const isTableVisible = useSelector(selectIsTableVisible);

  useEffect(() => {
    if (contacts) {
      dispatch(getAllContacts(contacts));
    }

    if (lists) {
      dispatch(getAllLists(lists));
    }
  }, [contacts, dispatch, lists]);

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

          <Container>{isTableVisible && <Pagination />}</Container>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
};
