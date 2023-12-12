import { useState } from "react";
// style
import { Wrapper, ButtonIconPlus, IconPlus } from "./Filter.styled";
// components
import { Modal } from "../Modal";
import { OrderForm } from "../OrderForm/OrderForm";

export const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <ButtonIconPlus onClick={toggleModal}>
          <IconPlus />
        </ButtonIconPlus>
      </Wrapper>
      {isModalOpen && (
        <Modal onToggleModal={toggleModal}>
          <OrderForm />
        </Modal>
      )}
    </>
  );
};
