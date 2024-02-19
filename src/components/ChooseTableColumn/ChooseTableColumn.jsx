import { useRef, useState } from "react";
import { useSelector } from "react-redux";
// style
import {
  ButtonWrapper,
  ButtonChoose,
  IconChoose,
  DropDownList,
  DropDownItem,
} from "./ChooseTableColumn.styled";
// components
import { DropDown } from "../DropDown";
import { Checkbox } from "../Checkbox";
import { selectTableHeader } from "../../redux/contacts/selectors";

export const ChooseTableColumn = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownRef = useRef(null);
  const buttonRef = useRef(null);
  const tableHeader = useSelector(selectTableHeader);

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
              tableHeader.map(({ id, buttonName, columnName, isVisible }) => (
                <DropDownItem key={id}>
                  <Checkbox
                    id={columnName}
                    name={columnName}
                    checked={isVisible}
                    labelText={buttonName}
                  />
                </DropDownItem>
              ))}
          </DropDownList>
        </DropDown>
      )}
    </ButtonWrapper>
  );
};
