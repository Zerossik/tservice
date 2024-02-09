import PropTypes from "prop-types";
// styled
// import { ButtonClose } from "./OrderView.styled";
// components
import { ButtonForm } from "../ButtonForm";

export const OrderView = ({ data, closeConfirm }) => {
  return (
    <div>
      <p>OrderView</p>
      <p>{JSON.stringify(data)}</p>
      <ButtonForm type="button" onClick={closeConfirm} buttonName="Закрити" />
    </div>
  );
};

OrderView.propTypes = {
  data: PropTypes.object.isRequired,
  closeConfirm: PropTypes.func.isRequired,
};
