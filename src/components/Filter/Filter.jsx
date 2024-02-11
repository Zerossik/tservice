import { useRef, useState } from "react";
// style
import {
  Wrapper,
  ButtonIconPlus,
  IconPlus,
  FilterWrapper,
} from "./Filter.styled";
// components
import { Modal } from "../Modal";
import { OrderForm } from "../OrderForm/OrderForm";
import { SelectSort } from "../SelectSort/SelectSort";
import { Search } from "../Search";
import { useConfirm } from "../ConfirmService/context";

export const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const awitingPromiseRef = useRef();
  const confirm = useConfirm();

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
        <ButtonIconPlus onClick={toggleModal}>
          <IconPlus />
        </ButtonIconPlus>

        <FilterWrapper>
          <SelectSort />
          <Search />
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
