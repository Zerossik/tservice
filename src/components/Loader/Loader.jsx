import FadeLoader from "react-spinners/FadeLoader";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";
// styled
import { Wrapper } from "./Loader.styled";

export const Loader = ({ isLoading }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Wrapper>
        <FadeLoader
          color={theme.color.loader}
          loading={isLoading}
          // cssOverride={override}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Wrapper>
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
