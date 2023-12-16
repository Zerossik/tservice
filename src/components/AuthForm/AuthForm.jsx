import PropTypes from "prop-types";
// style
import { Container, Title, FormStyled, Text } from "./AuthForm.styled";
// components
import { NavLinkForm } from "../NavLinkForm";

export const AuthForm = ({ formik, title, children, text, path, textLink }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>

        <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
          {children}
        </FormStyled>

        <Text>
          {text && <span>{text}</span>}
          <NavLinkForm path={path} textLink={textLink} />
        </Text>
      </Container>
    </>
  );
};

AuthForm.propTypes = {
  formik: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  path: PropTypes.string.isRequired,
  textLink: PropTypes.string.isRequired,
};
