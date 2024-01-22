import PropTypes from "prop-types";
// style
import { Button } from "./ButtonAdd.styled";
// component
import { useConfirm } from "../ConfirmService/context";
import { TypeAddForm } from "../TypeAddForm";
import { ManufacturerAddForm } from "../ManufacturerAddForm";
import { MasterAddForm } from "../MasterAddForm";

export const ButtonAdd = ({ icon, typeOfAdd }) => {
  const confirm = useConfirm();

  const handleClick = () => {
    let component = null;

    switch (typeOfAdd) {
      case "type":
        component = <TypeAddForm closeConfirm={confirm.handleClose} />;
        break;

      case "manufacturer":
        component = <ManufacturerAddForm closeConfirm={confirm.handleClose} />;
        break;

      case "masterName":
        component = <MasterAddForm closeConfirm={confirm.handleClose} />;
        break;
    }

    confirm.openConfirm({ component });
  };

  return (
    <Button type="button" onClick={handleClick}>
      {icon}
    </Button>
  );
};

ButtonAdd.propTypes = {
  icon: PropTypes.node.isRequired,
  typeOfAdd: PropTypes.string.isRequired,
};
