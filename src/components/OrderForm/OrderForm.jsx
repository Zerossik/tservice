import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTheme } from "styled-components";
import { toast } from "react-toastify";
// style
import {
  FormStyled,
  // FormButton,
  InputPhoneWrapper,
  List,
  ListItemArea,
  ListItemLast,
} from "./OrderForm.styled";
// components
import { OrderSchema } from "../../validation";
import { Label } from "../Label";
import { Input } from "../Input";
import { Select } from "../Select";
import { SelectConst } from "../SelectConst";
import { TextArea } from "../TextArea/TextArea";
import { ErrorInput } from "../ErrorInput";
import { ButtonForm } from "../ButtonForm";
import { selectIsContactsLoading } from "../../redux/contacts/selectors";
import { addContactThunk } from "../../redux/contacts/contactsThunks";
import { Loader } from "../Loader";

const listOfTypes = [
  { id: 1, type: "Phone" },
  { id: 2, type: "Laptop" },
  { id: 3, type: "Watch" },
  { id: 4, type: "TV-set" },
];

const listOfStatus = [
  { id: 1, status: "Accepted", fieldName: "Прийнято" },
  { id: 2, status: "Repairing", fieldName: "В роботі" },
  { id: 3, status: "Finished", fieldName: "Закінчено" },
  { id: 4, status: "Issued", fieldName: "Видано" },
];

const listOfMastersName = [
  { id: 1, masterName: "Viktor Victor" },
  { id: 2, masterName: "Vlad Vlad " },
  { id: 3, masterName: "Devid Green" },
];

export const OrderForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsContactsLoading);
  const theme = useTheme();

  useEffect(() => {}, []);

  const formik = useFormik({
    initialValues: {
      type: "",
      manufacturer: "",
      model: "",
      deviceID: "",
      customerName: "",
      phoneNumber: "",
      price: 0,
      status: "Accepted",
      masterName: "",
      description: "",
      failure: "",
    },
    validationSchema: OrderSchema,
    onSubmit: (values) => {
      dispatch(addContactThunk(values))
        .unwrap()
        .then(() => toast.success(`We added your data`))
        .catch((err) => toast.warning(`Something happend: ${err.message}`));
    },
  });

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <FormStyled onSubmit={formik.handleSubmit}>
        <List>
          <li>
            <Select
              name="type"
              type="text"
              formik={formik}
              labelText="Тип техніки"
              fildsList={listOfTypes}
            />
          </li>
          <li>
            <Input
              name="manufacturer"
              type="text"
              formik={formik}
              labelText="Виробник"
            />
          </li>
          <li>
            <Input
              name="model"
              type="text"
              formik={formik}
              labelText="Модель"
            />
          </li>
          <li>
            <Input
              name="deviceID"
              type="text"
              formik={formik}
              labelText="Серійний номер"
            />
          </li>
          <li>
            <Input
              name="customerName"
              type="text"
              formik={formik}
              labelText="Ім'я клієнта"
            />
          </li>
          <li>
            <InputPhoneWrapper>
              <Label htmlFor="phoneNumber" labelText="Номер телефона" />
              <PhoneInput
                country={"ua"}
                value={formik.values.phoneNumber}
                onChange={(phone) => formik.setFieldValue("phoneNumber", phone)}
                inputProps={{ name: "phoneNumber", id: "phoneNumber" }}
                containerStyle={
                  {
                    // backgroundColor: "red",
                  }
                }
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  padding: "6px 12px 6px 50px",
                  outline: "none",
                  color: theme.color.primary,
                  borderRadius: theme.borderRadius.extraSmall,
                  border: `1px solid ${theme.color.border}`,
                  backgroundColor: theme.color.bgSecondary,
                }}
                buttonStyle={{
                  backgroundColor: theme.color.bgSecondary,
                  border: `1px solid ${theme.color.border}`,
                  borderTopLeftRadius: theme.borderRadius.extraSmall,
                  borderBottomLeftRadius: theme.borderRadius.extraSmall,
                }}
                dropdownStyle={{
                  border: `1px solid ${theme.color.border}`,
                  borderRadius: theme.borderRadius.extraSmall,
                  backgroundColor: theme.color.dropDownBg,
                  boxShadow: theme.color.shadow,
                  // hover: { backgroundColor: theme.color.dropDownHover },
                  overflow: "hidden",
                }}
                searchStyle={{
                  backgroundColor: "green",
                }}
              />
              {formik.errors.phoneNumber ? (
                <ErrorInput text={formik.errors.phoneNumber} />
              ) : null}
            </InputPhoneWrapper>
          </li>
          <ListItemArea>
            <TextArea
              name="description"
              formik={formik}
              labelText="Опис від клієнта"
            />
          </ListItemArea>
          <li>
            <Input
              name="price"
              type="text"
              formik={formik}
              labelText="Сума до сплати"
            />
          </li>
          <li>
            <SelectConst
              name="status"
              type="text"
              formik={formik}
              labelText="Статус"
              fildsList={listOfStatus}
            />
          </li>
          <li>
            <SelectConst
              name="masterName"
              type="text"
              formik={formik}
              labelText="Ім'я майстра"
              fildsList={listOfMastersName}
            />
          </li>
          <ListItemArea>
            <TextArea name="failure" formik={formik} labelText="Несправність" />
          </ListItemArea>
          <ListItemLast>
            <ButtonForm
              buttonName="Додати"
              disabled={!(formik.isValid && formik.dirty)}
            />
          </ListItemLast>
        </List>
      </FormStyled>
    </>
  );
};