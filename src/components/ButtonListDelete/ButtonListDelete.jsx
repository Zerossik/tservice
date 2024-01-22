import PropTypes from "prop-types";
// style
import { Button, Icon } from "./ButtonListDelete.styled";
// components
import { useConfirm } from "../ConfirmService/context";
import { TypeDeleteForm } from "../TypeDeleteForm";
import { ManufacturerDeleteForm } from "../ManufacturerDeleteForm";
import { MasterDeleteForm } from "../MasterDeleteForm";

export const ButtonListDelete = ({ fildName, selectName, closeList, id }) => {
  const confirm = useConfirm();

  const handleClick = (oldFildName, select) => {
    closeList(false);

    let component = null;

    switch (select) {
      case "type":
        component = (
          <TypeDeleteForm
            closeConfirm={confirm.handleClose}
            oldFildName={oldFildName}
          />
        );
        break;

      case "manufacturer":
        component = (
          <ManufacturerDeleteForm
            closeConfirm={confirm.handleClose}
            oldFildName={oldFildName}
          />
        );
        break;

      case "masterName":
        component = (
          <MasterDeleteForm
            closeConfirm={confirm.handleClose}
            oldFildName={oldFildName}
            id={id}
          />
        );
        break;
    }

    confirm.openConfirm({ oldFildName, select, component });
  };

  return (
    <Button type="button" onClick={() => handleClick(fildName, selectName)}>
      <Icon />
    </Button>
  );
};

ButtonListDelete.propTypes = {
  fildName: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  closeList: PropTypes.func.isRequired,
  id: PropTypes.string,
};
