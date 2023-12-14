import PropTypes from "prop-types";
// style
import { Button } from "./ToggleTheme.styled";

export const ToggleTheme = ({ onToggleTheme, style }) => {
  return (
    <Button style={style} type="button" onClick={onToggleTheme}>
      Toggle Theme
    </Button>
  );
};

ToggleTheme.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  style: PropTypes.object,
};
