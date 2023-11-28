import FadeLoader from "react-spinners/FadeLoader";
import PropTypes from "prop-types";
// styled
import { Wrapper } from "./Loader.styled";

export const Loader = ({ isLoading }) => {
  return (
    <Wrapper>
      <FadeLoader
        color="#0b68f3"
        loading={isLoading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Wrapper>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};
