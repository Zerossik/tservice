import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
// style
import {
  Wrapper,
  ButtonIconPlus,
  IconPlus,
  FilterWrapper,
  Wrap,
} from "./Filter.styled";
// components
import { Modal } from "../Modal";
import { OrderForm } from "../OrderForm/OrderForm";
import { SelectSort } from "../SelectSort/SelectSort";
import { Search } from "../Search";
import { useConfirm } from "../ConfirmService/context";
import { ChooseTableColumn } from "../ChooseTableColumn";
import { PATHS } from "../../constants";

export const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const awitingPromiseRef = useRef();
  const confirm = useConfirm();
  const location = useLocation();

  const isActive = location.pathname === `/${PATHS.ARCHIVE}`;

  const toggleModal = () => {
    if (isFormEdit) {
      return new Promise((resolve, reject) => {
        awitingPromiseRef.current = { resolve, reject };

        confirm.openConfirm({
          message: "Якщо ви закриєте вікно, ви втратите всі дані! Закрити?",
          awaitAnswer: awitingPromiseRef.current,
        });
      })
        .then((closeConfirm) => {
          closeConfirm();
          setIsModalOpen(false);
          setIsFormEdit(false);
        })
        .catch((closeConfirm) => {
          closeConfirm();
        });
    }

    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <ButtonIconPlus onClick={toggleModal} disabled={isActive}>
          <IconPlus />
        </ButtonIconPlus>

        <FilterWrapper>
          <SelectSort />
          <Wrap>
            <Search />
            <ChooseTableColumn />
          </Wrap>
        </FilterWrapper>
      </Wrapper>

      {isModalOpen && (
        <Modal title="Нове замовлення" onToggleModal={toggleModal}>
          <OrderForm closeModal={setIsModalOpen} isFormEdit={setIsFormEdit} />
        </Modal>
      )}
    </>
  );
};
