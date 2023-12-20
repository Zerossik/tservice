import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
import { Title, FormStyled } from "./AddMasterForm.styled";
// components
import { AddMaster } from "../../validation";
import { Input } from "../Input";
import { ButtonForm } from "../ButtonForm";
import { selectIsSettingsLoading } from "../../redux/settings/selectors";
import { addMasterThunk } from "../../redux/settings/settingsThunk";
import { Loader } from "../Loader";

export const AddMasterForm = () => {
  const isLoading = useSelector(selectIsSettingsLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: AddMaster,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(
        addMasterThunk(values)
          .unwrap()
          .then(() => {
            toast.success("Майстер доданий");
          })
          .catch(() => {
            toast.warning("Щось пішло не так, спробуйте ще раз");
          })
      );
    },
  });

  return (
    <>
      <Title>Додати майстра</Title>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Input name="firstName" type="text" formik={formik} labelText="Ім'я" />

        <Input
          name="lastName"
          type="text"
          formik={formik}
          labelText="Прізвище"
        />

        <ButtonForm
          buttonName="Додати"
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
        {isLoading && <Loader isLoading={isLoading} />}
      </FormStyled>
    </>
  );
};
