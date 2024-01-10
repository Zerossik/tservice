import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
// components
import { Input } from "../Input";
import { ButtonForm } from "../ButtonForm";
import { selectIsLoading } from "../../redux/auth/selectors";
import { LoaderPretty } from "../LoaderPretty";
import { Select } from "../Select";
import { selectDeviceTypes } from "../../redux/settingsUser/selectors";
import { editTypeSchema } from "../../validation";
import { rewriteDeviceTypeArr } from "../../utils";
import { editDeviceTypeThunk } from "../../redux/settingsUser/settingsUserThunks";
import { SettingsForm } from "../SettingsForm/SettingsForm";

export const TypeEditForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const deviceTypes = useSelector(selectDeviceTypes);
  const dispatch = useDispatch();

  const EditTypeSchema = useMemo(() => editTypeSchema(), []);

  const formik = useFormik({
    initialValues: {
      id: "",
      type: "",
      newDeviceType: "",
    },
    validationSchema: EditTypeSchema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(editDeviceTypeThunk(values))
        .unwrap()
        .then(() => {
          toast.success("Тип техніки змінено");
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
      <SettingsForm formik={formik} legendTitle="Редагування типу техніки">
        <Select
          idFlag
          name="type"
          type="text"
          formik={formik}
          labelText="Виберіть тип"
          // styleLabel={{ fontWeight: 600 }}
          fildsList={rewriteDeviceTypeArr(deviceTypes)}
        />

        <Input
          name="newDeviceType"
          type="text"
          formik={formik}
          labelText="Нова назва"
        />

        <ButtonForm
          buttonName="Редагувати"
          disabled={!(formik.isValid && formik.dirty && !isLoading)}
        />
      </SettingsForm>
    </>
  );
};
