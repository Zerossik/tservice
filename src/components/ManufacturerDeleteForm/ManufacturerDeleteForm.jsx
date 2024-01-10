import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
// components
import { ButtonForm } from "../ButtonForm";
import { selectIsLoading } from "../../redux/auth/selectors";
import { LoaderPretty } from "../LoaderPretty";
import { Select } from "../Select";
import { selectDeviceManufacturers } from "../../redux/settingsUser/selectors";
import { deleteManufacturerSchema } from "../../validation";
import { deleteDeviceManufacturerThunk } from "../../redux/settingsUser/settingsUserThunks";
import { SettingsForm } from "../SettingsForm/SettingsForm";

export const ManufacturerDeleteForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const deviceManufacturer = useSelector(selectDeviceManufacturers);
  const dispatch = useDispatch();

  const DeleteManufacturerSchema = useMemo(
    () => deleteManufacturerSchema(),
    []
  );

  const formik = useFormik({
    initialValues: {
      id: "",
      manufacturer: "",
    },
    validationSchema: DeleteManufacturerSchema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(deleteDeviceManufacturerThunk(values))
        .unwrap()
        .then(() => {
          toast.success("Виробника видалено");
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
      <SettingsForm formik={formik} legendTitle="Видалити виробника">
        <Select
          idFlag
          name="manufacturer"
          type="text"
          formik={formik}
          // labelText="Видалити виробника"
          // styleLabel={{ fontWeight: 600 }}
          fildsList={deviceManufacturer}
        />

        <ButtonForm
          buttonName="Видалити"
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
      </SettingsForm>
    </>
  );
};
