import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
import { Title, FormStyled } from "../AddMasterForm/AddMasterForm.styled";
// components
import { selectIsContactsLoading } from "../../redux/contacts/selectors";
import { LoaderPretty } from "../LoaderPretty";
import { ButtonForm } from "../ButtonForm";
import { Input } from "../Input";
import { AddManufacturerSchema } from "../../validation";
import { addDeviceManufacturerThunk } from "../../redux/settingsUser/settingsUserThunks";

export const ManufacturerAddForm = () => {
  const isLoading = useSelector(selectIsContactsLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      manufacturer: "",
    },
    validationSchema: AddManufacturerSchema,
    onSubmit: async (values) => {
      dispatch(addDeviceManufacturerThunk(values))
        .unwrap()
        .then(() => {
          toast.success("Виробник доданий");
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
      <Title>Додати виробника</Title>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Input
          name="manufacturer"
          type="text"
          formik={formik}
          labelText="Виробник"
        />

        <ButtonForm
          buttonName="Додати"
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
      </FormStyled>
    </>
  );
};
