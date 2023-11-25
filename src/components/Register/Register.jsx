import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { SignupSchema } from "../../validation";
import { PATHS } from "../../constants";
// styled
import {
  Container,
  Title,
  FormStyled,
  InputWrapper,
  Label,
  InputStyled,
  FormButton,
  Text,
  Error,
} from "./Register.styled";

export const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Title>Реєстрація</Title>

      <FormStyled onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <Label htmlFor="firstName">First Name</Label>
          <InputStyled
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Ім’я"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <Error>{formik.errors.firstName}</Error>
          ) : null}
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

        <FormButton type="submit" disabled={!(formik.isValid && formik.dirty)}>
          Зареєструватися
        </FormButton>
      </FormStyled>

      <Text>
        <span>Ти маєш акаунт?</span>
        <NavLink to={`/${PATHS.LOGIN}`}>Увійти</NavLink>
      </Text>
    </Container>
  );
};
