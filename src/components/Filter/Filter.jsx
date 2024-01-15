import { useState } from "react";
import { useFormik } from "formik";
// style
import {
  Wrapper,
  ButtonIconPlus,
  IconPlus,
  SearchWrapper,
} from "./Filter.styled";
// components
import { Modal } from "../Modal";
import { OrderForm } from "../OrderForm/OrderForm";
import { useDispatch } from "react-redux";
import { SelectSort } from "../SelectSort/SelectSort";

export const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      type: "",
      search: "",
    },
    // validationSchema: AddManufacturerSchema,
    onSubmit: async (values) => {
      console.log(values);
      // dispatch()
      //   .unwrap()
      //   .then(() => {
      //     toast.success("Виробник доданий");
      //     formik.resetForm();
      //   })
      //   .catch(() => {
      //     toast.warning("Щось пішло не так, спробуйте ще раз");
      //   });
    },
  });

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <ButtonIconPlus onClick={toggleModal}>
          <IconPlus />
        </ButtonIconPlus>

        <SearchWrapper>
          <SelectSort formikSort={formik} />
        </SearchWrapper>
      </Wrapper>
      {isModalOpen && (
        <Modal title="Нове замовлення" onToggleModal={toggleModal}>
          <OrderForm />
        </Modal>
      )}
    </>
  );
};
