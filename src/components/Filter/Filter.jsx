import { useState } from "react";
// components
import { Modal } from "../Modal";
// style
import { Wrapper, ButtonIconPlus, IconPlus } from "./Filter.styled";

export const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  console.log(isModalOpen);
  return (
    <>
      <Wrapper>
        <ButtonIconPlus onClick={toggleModal}>
          <IconPlus />
        </ButtonIconPlus>
      </Wrapper>
      {isModalOpen && (
        <Modal onToggleModal={toggleModal}>
          <p>Add Order</p>
        </Modal>
      )}
    </>
  );
};
