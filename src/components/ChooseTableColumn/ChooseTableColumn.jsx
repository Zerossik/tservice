import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// style
import {
  ButtonWrapper,
  Wrapper,
  ButtonChoose,
  IconChoose,
  DropDownList,
  DropDownItem,
  ButtonSaveWrapper,
} from "./ChooseTableColumn.styled";
// components
import { DropDown } from "../DropDown";
import { Checkbox } from "../Checkbox";
import { changeVisibleTableSettings } from "../../redux/settingsUser/settingsUserSlice";
import { ButtonForm } from "../ButtonForm";
import { updateTableSettings } from "../../services/settingsUserAPI";
import { selectTableSettings } from "../../redux/settingsUser/selectors";

export const ChooseTableColumn = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch();
  const dropDownRef = useRef(null);
  const buttonRef = useRef(null);
  const tableSettings = useSelector(selectTableSettings);

  const handleChangeCheckbox = (id) => {
    dispatch(changeVisibleTableSettings(id));
    setIsButtonDisabled(false);
  };

  const handleButtonClickSave = () => {
    const tableSettingsWithout_Id = tableSettings.map((item) => {
      const newObj = { ...item };
      delete newObj._id;
      return newObj;
    });

    updateTableSettings(tableSettingsWithout_Id)
      .then(() => {
        toast.success("Налаштування таблиці оновлено");
        setIsButtonDisabled(true);
      })
      .catch(() => toast.warning("Щось пішло не так, спробуйте ще раз"));
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
          <Wrapper ref={dropDownRef}>
            <DropDownList>
              {tableSettings &&
                tableSettings.map(
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
            </DropDownList>

            <ButtonSaveWrapper>
              <ButtonForm
                type="button"
                buttonName="Зберегти"
                disabled={isButtonDisabled}
                onClick={handleButtonClickSave}
              />
            </ButtonSaveWrapper>
          </Wrapper>
        </DropDown>
      )}
    </ButtonWrapper>
  );
};
