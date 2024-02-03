import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { useFormik } from "formik";
// style
import { Wrapper, Form, Button, IconSearch } from "./Search.styled";
// components
import { Input } from "../Input";
import { selectIsContactsLoading } from "../../redux/contacts/selectors";
import { LoaderPretty } from "../LoaderPretty";
import { useNavigation, useSearchParams } from "react-router-dom";

export const Search = () => {
  const [, setSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const theme = useTheme();
  const isLoading = useSelector(selectIsContactsLoading);

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("filter");

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: ({ search }) => {
      setSearchParams({ filter: search });
      formik.resetForm();
    },
  });

  const extraInputStyle = {
    borderRadius: 0,
    borderTopLeftRadius: theme.borderRadius.extraSmall,
    borderBottomLeftRadius: theme.borderRadius.extraSmall,
    borderRight: "none",
    borderColor: theme.color.bgSecondary,
  };

  return (
    <>
      {isLoading && <LoaderPretty />}
      <Wrapper>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <Input
            name="search"
            type="text"
            formik={formik}
            style={extraInputStyle}
            placeholder={searching ? "Завантажуємо..." : "Пошук"}
          />
          <Button type="submit">
            <IconSearch />
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};
