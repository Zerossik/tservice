import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
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
import { PATHS } from "../../constants";
import { LoaderPretty } from "../LoaderPretty";

export const ChooseTableColumn = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const dropDownRef = useRef(null);
  const buttonRef = useRef(null);
  const tableSettings = useSelector(selectTableSettings);

  const isArchive = location.pathname === `/${PATHS.ARCHIVE}`;

  const handleChangeCheckbox = (id) => {
    dispatch(changeVisibleTableSettings(id));
    setIsButtonDisabled(false);
  };

  const toggleUserDropDown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  const handleButtonClickSave = () => {
    const tableSettingsWithout_Id = tableSettings.map((item) => {
      const newObj = { ...item };
      delete newObj._id;
      return newObj;
    });

    setIsLoading(true);
    setIsButtonDisabled(true);

    updateTableSettings(tableSettingsWithout_Id)
      .then(() => {
        toast.success("Налаштування таблиці оновлено");
        toggleUserDropDown();
      })
      .catch(() => {
        toast.warning("Щось пішло не так, спробуйте ще раз");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <LoaderPretty />}
      <ButtonWrapper>
        <ButtonChoose
          type="button"
          onClick={toggleUserDropDown}
          ref={buttonRef}
        >
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
                  tableSettings.map((item) => {
                    // отключаем доступ к полю "дата выдачи"
                    if (!isArchive && item.columnName === "issueDate") return;

                    const {
                      id,
                      buttonName,
                      columnName,
                      isVisible,
                      isDisabled,
                    } = item;

                    return (
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
                    );
                  })}
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
    </>
  );
};
