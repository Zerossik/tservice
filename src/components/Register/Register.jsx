import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignupSchema } from "../../validation";
import { PATHS } from "../../constants";
import { toast } from "react-toastify";
// styled
import {
  Container,
  Title,
  FormStyled,
  FormButton,
  NavLinkStyled,
  Text,
} from "./Register.styled";
import { signup } from "../../services/authAPI";
import { Loader } from "../Loader";
import { Input } from "../Input";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);

        const {
          code,
          data: { name },
        } = await signup(values);

        if (code === 201) {
          setLoading(false);
          toast.success(`Ваш профіль, ${name}, успішно створено`);
          formik.resetForm();
          navigate(`/${PATHS.LOGIN}`);
        }
      } catch (error) {
        toast.warning(error.message);
        setLoading(false);
      }
    },
  });

  return (
    <>
      {loading && <Loader isLoading={loading} />}
      <Container>
        <Title>Реєстрація</Title>

        <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
          <Input
            name="name"
            type="text"
            formik={formik}
            labelText="Ім’я"
            moveLabel
          />

          <Input
            name="email"
            type="email"
            formik={formik}
            labelText="Email адреса"
            moveLabel
          />

          <Input
            name="password"
            type="password"
            formik={formik}
            labelText="Пароль"
            moveLabel
          />

          <FormButton
            type="submit"
            disabled={!(formik.isValid && formik.dirty && !loading)}
            $loading={loading}
          >
            Зареєструватися
          </FormButton>
        </FormStyled>

        <Text>
          <span>Ти маєш акаунт?</span>
          <NavLinkStyled to={`/${PATHS.LOGIN}`}>Увійти</NavLinkStyled>
        </Text>
      </Container>
    </>
  );
};
