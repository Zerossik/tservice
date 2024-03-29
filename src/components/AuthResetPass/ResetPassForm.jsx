import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// components
import { resetPassword } from "../../services/authAPI";
import { AuthForm } from "../AuthForm/AuthForm";
import { ResetPassSchema } from "../../validation";
import { Input } from "../Input";
import { ButtonForm } from "../ButtonForm";
import { LoaderPretty } from "../LoaderPretty";
import { PATHS } from "../../constants";
import { removLeadTrailWhitespace } from "../../utils";

export const ResetPassForm = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ResetPassSchema,
    onSubmit: async (value) => {
      const trimValue = removLeadTrailWhitespace(value);

      try {
        setLoading(true);
        await resetPassword(trimValue);
        setLoading(false);
        toast.success(`Вам надіслано листа, перевірте пошту, будь ласка`);
        formik.resetForm();
      } catch (error) {
        setLoading(false);
        toast.warning(`Щось пішло не так, спробуйте ще раз`);
      }
    },
  });

  return (
    <>
      {loading && <LoaderPretty />}
      <AuthForm
        formik={formik}
        title="Відновлення паролю"
        path={`${PATHS.BASE}`}
        textLink="На головну"
      >
        <Input
          name="email"
          type="email"
          formik={formik}
          labelText="Email адреса"
          moveLabel
        />

        <ButtonForm
          buttonName="Відправити"
          disabled={!(formik.isValid && formik.dirty && !loading)}
        />
      </AuthForm>
    </>
  );
};
