import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
import { Title, FormStyled } from "../AddMasterForm/AddMasterForm.styled";
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
      <Title>Редагувати тип техніки</Title>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Select
          idFlag
          name="type"
          type="text"
          formik={formik}
          labelText="Виберіть тип техніки"
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
      </FormStyled>
    </>
  );
};
