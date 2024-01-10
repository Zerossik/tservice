import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
// components
import { AddMasterSchema } from "../../validation";
import { Input } from "../Input";
import { ButtonForm } from "../ButtonForm";
import { selectIsLoading } from "../../redux/auth/selectors";
import { addMasterThunk } from "../../redux/auth/authThunks";
import { LoaderPretty } from "../LoaderPretty";
import { SettingsForm } from "../SettingsForm/SettingsForm";

export const AddMasterForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: AddMasterSchema,
    onSubmit: async (values) => {
      dispatch(addMasterThunk(values))
        .unwrap()
        .then(() => {
          toast.success("Майстер доданий");
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
      <SettingsForm formik={formik} legendTitle="Додати майстра">
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
      </SettingsForm>
    </>
  );
};
