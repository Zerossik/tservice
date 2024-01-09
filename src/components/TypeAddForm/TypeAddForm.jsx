import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
import { Title, FormStyled } from "../AddMasterForm/AddMasterForm.styled";
// components
import { selectIsContactsLoading } from "../../redux/contacts/selectors";
import { LoaderPretty } from "../LoaderPretty";
import { ButtonForm } from "../ButtonForm";
import { AddTypeSchema } from "../../validation";
import { Input } from "../Input";
import { addDeviceTypeThunk } from "../../redux/settingsUser/settingsUserThunks";

export const TypeAddForm = () => {
  const isLoading = useSelector(selectIsContactsLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      type: "",
    },
    validationSchema: AddTypeSchema,
    onSubmit: async (values) => {
      dispatch(addDeviceTypeThunk(values))
        .unwrap()
        .then(() => {
          toast.success("Тип техніки доданий");
          formik.resetForm();
        })
        .catch(() => {
          toast.warning("Щось пішло не так, спробуйте ще раз");
        });
    },
  });

  return (
    <>
      {isLoading && <LoaderPretty />}
      <Title>Додати тип техніки</Title>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Input
          name="type"
          type="text"
          formik={formik}
          labelText="Тип техніки"
        />

        <ButtonForm
          buttonName="Додати"
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
      </FormStyled>
    </>
  );
};
