import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
import { Title, FormStyled } from "../AddMasterForm/AddMasterForm.styled";
// components
import { ButtonForm } from "../ButtonForm";
import { selectIsLoading } from "../../redux/auth/selectors";
import { LoaderPretty } from "../LoaderPretty";
import { Select } from "../Select";
import { selectDeviceManufacturers } from "../../redux/settingsUser/selectors";
import { Input } from "../Input";
import { editManufacturerSchema } from "../../validation";
import { editDeviceManufacturerThunk } from "../../redux/settingsUser/settingsUserThunks";

export const ManufacturerEditForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const deviceManufacturer = useSelector(selectDeviceManufacturers);
  const dispatch = useDispatch();

  const EditManufacturerSchema = useMemo(() => editManufacturerSchema(), []);

  const formik = useFormik({
    initialValues: {
      id: "",
      manufacturer: "",
      newManufacturer: "",
    },
    validationSchema: EditManufacturerSchema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(editDeviceManufacturerThunk(values))
        .unwrap()
        .then(() => {
          toast.success("Виробника змінено");
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
      <Title>Редагувати виробника</Title>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Select
          idFlag
          name="manufacturer"
          type="text"
          formik={formik}
          labelText="Виберіть виробника"
          fildsList={deviceManufacturer}
        />

        <Input
          name="newManufacturer"
          type="text"
          formik={formik}
          labelText="Нова назва"
        />

        <ButtonForm
          buttonName="Редагувати"
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
      </FormStyled>
    </>
  );
};
