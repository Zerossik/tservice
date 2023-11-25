import { NavLink, useLoaderData } from "react-router-dom";
import { PATHS } from "../../constants";
import { useFormik } from "formik";
import { SigninSchema } from "../../validation";
// styled
import {
  Container,
  Title,
  FormStyled,
  InputWrapper,
  Label,
  InputStyled,
  FormButton,
  NavLinkStyled,
  Text,
  Error,
} from "../Register/Register.styled";

export const loader = () => {
  // throw {
  //   message: "the error there",
  //   statusText: "statusText",
  //   status: "res.status",
  // };
  return "The data is here";
};

export const Login = () => {
  const data = useLoaderData();
  console.log(data);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Title>Авторизація</Title>

      <FormStyled onSubmit={formik.handleSubmit}>
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

        <div>
          <NavLinkStyled to={PATHS.BASE}>Забули пароль?</NavLinkStyled>
        </div>

        <FormButton type="submit" disabled={!(formik.isValid && formik.dirty)}>
          Увійти
        </FormButton>
      </FormStyled>

      <Text>
        <span>Ти не маєш акаунта?</span>
        <NavLink to={`/${PATHS.REGISTER}`}>Зареєструватися</NavLink>
      </Text>
    </Container>
  );
};
