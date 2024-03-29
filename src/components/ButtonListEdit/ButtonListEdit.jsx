import PropTypes from "prop-types";
// style
import { Button, Icon } from "./ButtonListEdit.styled";
// components
import { useConfirm } from "../ConfirmService/context";
import { TypeEditForm } from "../TypeEditForm";
import { ManufacturerEditForm } from "../ManufacturerEditForm";

export const ButtonListEdit = ({ fildName, selectName, closeList }) => {
  const confirm = useConfirm();

  const handleClick = (oldFildName, select) => {
    closeList(false);

    let component = null;

    switch (select) {
      case "type":
        component = (
          <TypeEditForm
            closeConfirm={confirm.handleClose}
            oldFildName={oldFildName}
          />
        );
        break;

      case "manufacturer":
        component = (
          <ManufacturerEditForm
            closeConfirm={confirm.handleClose}
            oldFildName={oldFildName}
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

ButtonListEdit.propTypes = {
  fildName: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  closeList: PropTypes.func.isRequired,
};
