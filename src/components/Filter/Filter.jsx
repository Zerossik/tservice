import { useState } from "react";
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

        <FilterWrapper>
          <SelectSort />
          <Search />
        </FilterWrapper>
      </Wrapper>

      {isModalOpen && (
        <Modal title="Нове замовлення" onToggleModal={toggleModal}>
          <OrderForm />
        </Modal>
      )}
    </>
  );
};
