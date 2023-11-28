import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignupSchema } from "../../validation";
import { PATHS } from "../../constants";
import { toast } from "react-toastify";
// styled
import {
  Container,
  Title,
  FormStyled,
  InputWrapper,
  Label,
  InputStyled,
  FormButton,
  // IconLoader,
  Text,
  Error,
} from "./Register.styled";
import { signup } from "../../services/authAPI";
import { Loader } from "../Loader";

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

        <FormStyled onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <Label htmlFor="name">First Name</Label>
            <InputStyled
              id="name"
              name="name"
              type="text"
              placeholder="Ім’я"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="email">Email Address</Label>
            <InputStyled
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="email">Password</Label>
            <InputStyled
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <Error>{formik.errors.password}</Error>
            ) : null}
          </InputWrapper>

          <FormButton
            type="submit"
            disabled={!(formik.isValid && formik.dirty && !loading)}
            $loading={loading}
          >
            Зареєструватися
            {/* {loading && <IconLoader />} */}
          </FormButton>
        </FormStyled>

        <Text>
          <span>Ти маєш акаунт?</span>
          <NavLink to={`/${PATHS.LOGIN}`}>Увійти</NavLink>
        </Text>
      </Container>
    </>
  );
};
