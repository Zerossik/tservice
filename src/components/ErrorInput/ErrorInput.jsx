import PropTypes from "prop-types";
// style
import { Error } from "./ErrorInput.styled";

export const ErrorInput = ({ text }) => {
  return <Error>{text}</Error>;
};

ErrorInput.propTypes = {
  text: PropTypes.string,
};
