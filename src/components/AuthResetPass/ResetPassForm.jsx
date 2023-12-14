import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
// style
import {
  Container,
  Title,
  FormStyled,
  Text,
} from "../Register/Register.styled";
// components
import { resetPassword } from "../../services/authAPI";
import { resetPassSchema } from "../../validation";
import { Input } from "../Input";
import { NavLinkForm } from "../NavLinkForm";
import { ButtonForm } from "../ButtonForm";
import { Loader } from "../Loader";
import { PATHS } from "../../constants";

export const ResetPassForm = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: resetPassSchema,
    onSubmit: async (value) => {
      try {
        setLoading(true);
        await resetPassword(value);
        setLoading(false);
        toast.success(`Вам надіслано листа, перевірте пошту, будь ласка`);
        formik.resetForm();
      } catch (error) {
        console.log("error ", error.message);
        toast.warning(`Щось пішло не так, спробуйте ще раз`);
      }
    },
  });

  return (
    <>
      {loading && <Loader isLoading={loading} />}
      <Container>
        <Title>Відновлення паролю</Title>
        <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
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
        </FormStyled>

        <Text>
          <NavLinkForm path={`${PATHS.BASE}`} textLink="На головну" />
        </Text>
      </Container>
    </>
  );
};
