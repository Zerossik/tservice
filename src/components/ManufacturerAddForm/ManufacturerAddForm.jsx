import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
// components
import { LoaderPretty } from "../LoaderPretty";
import { ButtonForm } from "../ButtonForm";
import { Input } from "../Input";
import { AddManufacturerSchema } from "../../validation";
import { addDeviceManufacturerThunk } from "../../redux/settingsUser/settingsUserThunks";
import { SettingsForm } from "../SettingsForm/SettingsForm";
import { selectSettingsIsLoading } from "../../redux/settingsUser/selectors";

export const ManufacturerAddForm = () => {
  const isLoading = useSelector(selectSettingsIsLoading);
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
      <SettingsForm formik={formik} legendTitle="Додати виробника">
        <Input
          name="manufacturer"
          type="text"
          formik={formik}
          // labelText="Додати виробника"
          // styleLabel={{ fontWeight: 600 }}
        />

        <ButtonForm
          buttonName="Додати"
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
      </SettingsForm>
    </>
  );
};
