import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// style
import { List, ItemList } from "./MasterAddForm.styled";
// components
import { AddMasterSchema } from "../../validation";
import { Input } from "../Input";
import { selectIsLoading } from "../../redux/auth/selectors";
import { addMasterThunk } from "../../redux/auth/authThunks";
import { LoaderPretty } from "../LoaderPretty";
import { SettingsForm } from "../SettingsForm/SettingsForm";
import { removLeadTrailWhitespace } from "../../utils";

export const MasterAddForm = ({ closeConfirm }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: AddMasterSchema,
    onSubmit: async (values) => {
      const trimValues = removLeadTrailWhitespace(values);

      dispatch(addMasterThunk(trimValues))
        .unwrap()
        .then(() => {
          toast.success("Майстер доданий");
          formik.resetForm();
          closeConfirm();
        })
        .catch(() => {
          toast.warning("Щось пішло не так, спробуйте ще раз");
        });
    },
  });

  return (
    <>
      {isLoading && <LoaderPretty />}
      <SettingsForm
        formik={formik}
        isLoading={isLoading}
        title="Додати майстра"
        buttonName="Додати"
        closeConfirm={closeConfirm}
      >
        <List>
          <ItemList>
            <Input
              name="firstName"
              type="text"
              formik={formik}
              labelText="Ім'я"
            />
          </ItemList>
          <ItemList>
            <Input
              name="lastName"
              type="text"
              formik={formik}
              labelText="Прізвище"
            />
          </ItemList>
        </List>
      </SettingsForm>
    </>
  );
};

MasterAddForm.propTypes = {
  closeConfirm: PropTypes.func,
};
