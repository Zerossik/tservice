import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// style
import {
  ButtonWrapper,
  ButtonChoose,
  IconChoose,
  DropDownList,
  DropDownItem,
  Warning,
} from "./ChooseTableColumn.styled";
// components
import { DropDown } from "../DropDown";
import { Checkbox } from "../Checkbox";
import { selectTableHeader } from "../../redux/contacts/selectors";
import { changeVisibleTableHead } from "../../redux/contacts/ContactSlice";

export const ChooseTableColumn = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const dropDownRef = useRef(null);
  const buttonRef = useRef(null);
  const tableHeader = useSelector(selectTableHeader);

  const handleChangeCheckbox = (id) => {
    console.log("chB", id);
    dispatch(changeVisibleTableHead(id));
  };

  const toggleUserDropDown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  return (
    <ButtonWrapper>
      <ButtonChoose type="button" onClick={toggleUserDropDown} ref={buttonRef}>
        <IconChoose />
      </ButtonChoose>

      {isDropDownOpen && (
        <DropDown
          styled={{ top: "110%", right: 0 }}
          onToggleDropDown={toggleUserDropDown}
          dropRef={dropDownRef}
          buttonRef={buttonRef}
        >
          <DropDownList ref={dropDownRef}>
            {tableHeader &&
              tableHeader.map(
                ({ id, buttonName, columnName, isVisible, isDisabled }) => (
                  <DropDownItem key={id}>
                    <Checkbox
                      id={columnName}
                      name={columnName}
                      isChecked={isVisible}
                      labelText={buttonName}
                      disabled={isDisabled}
                      onChange={() => handleChangeCheckbox(id)}
                    />
                  </DropDownItem>
                )
              )}
            <DropDownItem>
              <Warning>Налаштування зберігаються лише в поточній сесії</Warning>
            </DropDownItem>
          </DropDownList>
        </DropDown>
      )}
    </ButtonWrapper>
  );
};
