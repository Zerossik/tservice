import { useTheme } from "styled-components";
import { useFormik } from "formik";
// style
import { Form, Button, IconSearch } from "./Search.styled";
// components
import { Input } from "../Input";

export const Search = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // dispatch()
      //   .unwrap()
      //   .then(() => {
      //     toast.success("Виробник доданий");
      //     formik.resetForm();
      //   })
      //   .catch(() => {
      //     toast.warning("Щось пішло не так, спробуйте ще раз");
      //   });
    },
  });

  const extraInputStyle = {
    borderRadius: 0,
    borderTopLeftRadius: theme.borderRadius.extraSmall,
    borderBottomLeftRadius: theme.borderRadius.extraSmall,
    borderRight: "none",
    borderColor: theme.color.secondary,
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        name="search"
        type="text"
        formik={formik}
        style={extraInputStyle}
        placeholder="Пошук"
      />
      <Button type="submit">
        <IconSearch />
      </Button>
    </Form>
  );
};
