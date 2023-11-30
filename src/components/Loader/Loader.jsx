import FadeLoader from "react-spinners/FadeLoader";
import PropTypes from "prop-types";
// styled
// import { Wrapper } from "./Loader.styled";

export const Loader = ({ isLoading }) => {
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
      <FadeLoader
        color="#0b68f3"
        loading={isLoading}
        // cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};
