import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// styled
import { ButtonWrapper } from "./SendEmailForm.styled";
//components
import { removLeadTrailWhitespace } from "../../utils";
import { ResetPassSchema } from "../../validation";
import { LoaderPretty } from "../LoaderPretty";
import { Input } from "../Input";
import { ButtonForm } from "../ButtonForm";
import { sendEmail } from "../../services/authAPI";

export const SendEmailForm = ({ closeConfirm }) => {
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
        await sendEmail(trimValue);
        setLoading(false);
        toast.success(`Вам надіслано листа, будь ласка, перевірте пошту`);
        formik.resetForm();
        closeConfirm();
      } catch (error) {
        setLoading(false);
        toast.warning(`Такого емейлу немає. Введіть інший або зареєструйтесь`);
      }
    },
  });

  return (
    <>
      {loading && <LoaderPretty />}
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Input
          name="email"
          type="email"
          placeholder="email@dot.com"
          formik={formik}
        />

        <ButtonWrapper>
          <ButtonForm
            type="button"
            onClick={closeConfirm}
            buttonName="Скасувати"
          />

          <ButtonForm
            buttonName="Відправити"
            disabled={!(formik.isValid && formik.dirty && !loading)}
          />
        </ButtonWrapper>
      </form>
    </>
  );
};

SendEmailForm.propTypes = {
  closeConfirm: PropTypes.func,
};
