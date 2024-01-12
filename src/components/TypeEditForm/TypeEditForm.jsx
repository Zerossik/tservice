import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
// components
import { Input } from "../Input";
import { ButtonForm } from "../ButtonForm";
import { LoaderPretty } from "../LoaderPretty";
import { Select } from "../Select";
import {
  selectDeviceTypes,
  selectSettingsIsLoading,
} from "../../redux/settingsUser/selectors";
import { editTypeSchema } from "../../validation";
import { rewriteDeviceTypeArr } from "../../utils";
import { editDeviceTypeThunk } from "../../redux/settingsUser/settingsUserThunks";
import { SettingsForm } from "../SettingsForm/SettingsForm";

export const TypeEditForm = () => {
  const isLoading = useSelector(selectSettingsIsLoading);
  const deviceTypes = useSelector(selectDeviceTypes);
  const dispatch = useDispatch();

  const EditTypeSchema = useMemo(() => editTypeSchema(), []);

  const formik = useFormik({
    initialValues: {
      id: "",
      type: "",
      newType: "",
    },
    validationSchema: EditTypeSchema,
    onSubmit: async ({ type, newType }) => {
      dispatch(editDeviceTypeThunk({ oldType: type, newType }))
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
          name="newType"
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
