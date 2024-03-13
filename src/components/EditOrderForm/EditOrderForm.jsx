import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTheme } from "styled-components";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
// style
import {
  FormStyled,
  InputPhoneWrapper,
  List,
  ListItemArea,
  ListItemLast,
  BtnWrapper,
  Warning,
} from "./EditOrderForm.styled";
// components
import { editOrderSchema } from "../../validation";
import { Input } from "../Input";
import { Select } from "../Select";
import { Label } from "../Label";
import { ErrorInput } from "../ErrorInput";
import { TextArea } from "../TextArea/TextArea";
import { ButtonForm } from "../ButtonForm";
import { selectMasters } from "../../redux/auth/selectors";
import { updateContactByIdThunk } from "../../redux/contacts/contactsThunks";
import {
  selectDeviceManufacturers,
  selectDeviceTypes,
  selectStatuses,
} from "../../redux/settingsUser/selectors";
import {
  rewriteDeviceTypeArr,
  createListOfMasters,
  removLeadTrailWhitespace,
} from "../../utils";
import { ButtonAddList } from "../ButtonAddList";
import { STATUS } from "../../fakeData";

const compareData = (oldObj, newObj) => {
  let objValues = {};

  for (const property in oldObj) {
    if (oldObj[property] !== newObj[property]) {
      objValues = { ...objValues, [property]: newObj[property] };
    }
  }

  return objValues;
};

export const EditOrderForm = ({ id, order, closeModal, isFormEdit }) => {
  const [isOrderStatusReady, setIsOrderStatusReady] = useState(false);
  const dispatch = useDispatch();
  const masters = useSelector(selectMasters);
  const deviceManufacturers = useSelector(selectDeviceManufacturers);
  const deviceTypes = useSelector(selectDeviceTypes);
  const statusList = useSelector(selectStatuses);
  const theme = useTheme();

  const formik = useFormik({
    initialValues: order,
    enableReinitialize: true,
    validationSchema: editOrderSchema(),
    onSubmit: (values) => {
      const trimValues = removLeadTrailWhitespace(values);

      const body = compareData(order, trimValues);

      dispatch(updateContactByIdThunk({ id, body }))
        .unwrap()
        .then(() => {
          toast.success(
            `Замовлення ${
              isOrderStatusReady
                ? "оновлено та перенесено до архіву"
                : "оновлено"
            }`
          );
          isFormEdit(false);
          closeModal(false);
        })
        .catch(() => {
          toast.warning("Щось пішло не так, спробуйте ще раз");
        });
    },
  });

  useEffect(() => {
    isFormEdit(formik.dirty);
    setIsOrderStatusReady(formik.values.status === STATUS.ISSUED);
  }, [formik.dirty, formik.values.status, isFormEdit]);

  return (
    <>
      <FormStyled onSubmit={formik.handleSubmit}>
        <List>
          <li>
            <Select
              editable
              deletable
              name="type"
              type="text"
              formik={formik}
              labelText="Тип техніки"
              fildsList={rewriteDeviceTypeArr(deviceTypes)}
            />
          </li>
          <li>
            <Select
              editable
              deletable
              name="manufacturer"
              type="text"
              formik={formik}
              labelText="Виробник"
              fildsList={deviceManufacturers}
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
                country="ua"
                onlyCountries={["ua"]}
                value={formik.values.phoneNumber}
                onChange={(phone) => formik.setFieldValue("phoneNumber", phone)}
                inputProps={{ name: "phoneNumber", id: "phoneNumber" }}
                containerStyle={
                  {
                    // borderRadius: theme.borderRadius.extraSmall,
                    // overflow: "hidden",
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
              labelText="Опис несправності"
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
            <Select
              name="status"
              type="text"
              formik={formik}
              labelText="Статус"
              fildsList={statusList}
            />
          </li>
          <li>
            <Select
              deletable
              name="masterName"
              type="text"
              formik={formik}
              labelText="Ім'я майстра"
              fildsList={createListOfMasters(masters)}
            />
          </li>
          {/* <ListItemArea>
            <TextArea name="failure" formik={formik} labelText="Несправність" />
          </ListItemArea> */}

          <ListItemArea>
            <BtnWrapper>
              <ButtonAddList />
              {isOrderStatusReady && (
                <Warning>
                  {`Замовлення №${order.orderNumber} буде перенесено до архіву`}
                </Warning>
              )}
            </BtnWrapper>
          </ListItemArea>

          <ListItemLast>
            <ButtonForm
              buttonName={isOrderStatusReady ? "Перенести" : "Додати"}
              disabled={!(formik.isValid && formik.dirty)}
            />
          </ListItemLast>
        </List>
      </FormStyled>
      {}
    </>
  );
};

EditOrderForm.propTypes = {
  id: PropTypes.string.isRequired,
  order: PropTypes.object.isRequired,
  closeModal: PropTypes.func,
  isFormEdit: PropTypes.func,
};
