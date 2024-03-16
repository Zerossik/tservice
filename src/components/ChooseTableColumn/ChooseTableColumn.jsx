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
import {
  changeOrderTableSettings,
  changeVisibleTableSettings,
} from "../../redux/settingsUser/settingsUserSlice";
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
  const dragItemStart = useRef();
  const dragItemEnter = useRef();

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
    setIsLoading(true);
    setIsButtonDisabled(true);

    updateTableSettings(tableSettings)
      .then(() => {
        toast.success("Налаштування таблиці оновлено");
        toggleUserDropDown();
      })
      .catch(() => {
        toast.warning("Щось пішло не так, спробуйте ще раз");
      })
      .finally(() => setIsLoading(false));
  };

  const dragStart = (_, idx) => {
    dragItemStart.current = idx;
  };

  const dragEnter = (_, idx) => {
    dragItemEnter.current = idx;
  };

  const dragOver = (e) => {
    e.dataTransfer.dropEffect = "move";
    e.preventDefault();
  };

  const drop = () => {
    setIsButtonDisabled(false);
    const start = Number(dragItemStart.current);
    const end = Number(dragItemEnter.current);

    const deletedItem = { ...tableSettings[start] };
    const newTable = tableSettings.toSpliced(start, 1);
    const newOrderTable = newTable.toSpliced(end, 0, deletedItem);

    dispatch(changeOrderTableSettings(newOrderTable));
    dragItemStart.current = null;
    dragItemEnter.current = null;
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
              <DropDownList onDragOver={dragOver}>
                {tableSettings &&
                  tableSettings.map((item, idx) => {
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
                      <DropDownItem
                        key={id}
                        id={id}
                        onDragStart={(e) => dragStart(e, idx)}
                        onDragEnter={(e) => dragEnter(e, idx)}
                        onDragEnd={drop}
                        draggable="true"
                      >
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
