import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
// style
import {
  Table,
  Row,
  Thead,
  TableHead,
  Cell,
  Button,
  ButtonIconDelete,
  IconDelete,
} from "./WorkTable.styled";
// component
import { Modal } from "../Modal";
import { EditOrderForm } from "../EditOrderForm/EditOrderForm";
import { getAllContacts } from "../../redux/contacts/ContactSlice";
import { getAllLists } from "../../redux/settingsUser/settingsUserSlice";
import {
  selectContacts,
  selectTableHeader,
} from "../../redux/contacts/selectors";

export const WorkTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [order, setOrder] = useState({});
  const dispatch = useDispatch();
  const data = useLoaderData();
  const contacts = useSelector(selectContacts);
  const tableHeader = useSelector(selectTableHeader);

  useEffect(() => {
    if (data) {
      data.map(({ data }) => {
        Array.isArray(data)
          ? dispatch(getAllContacts(data))
          : dispatch(getAllLists(data));
      });
    }
  }, [dispatch, data]);

  const tableHeaderFiltered = tableHeader
    .filter((item) => item.isVisible)
    .sort((a, b) => a.order - b.order);

  const setOrderDataToEdit = (data) => {
    setOrder(data);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Table>
        <Thead>
          <Row>
            {tableHeaderFiltered.map(({ id, buttonName }) => (
              <TableHead key={id}>
                <Button type="button">{buttonName}</Button>
              </TableHead>
            ))}
            <TableHead>Дії</TableHead>
          </Row>
        </Thead>
        <tbody>
          {contacts.lehgth !== 0 &&
            contacts.map((item) => (
              <Row key={item._id}>
                {tableHeaderFiltered.map(({ id, columnName }) => (
                  <Cell key={id}>{item[columnName]}</Cell>
                ))}
                <Cell>
                  <ButtonIconDelete onClick={() => setOrderDataToEdit(item)}>
                    <IconDelete />
                  </ButtonIconDelete>
                </Cell>
              </Row>
            ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <Modal
          title={`Редагування замовлення #${order.orderNumber}`}
          onToggleModal={toggleModal}
        >
          <EditOrderForm id={order._id} order={order} />
        </Modal>
      )}
    </>
  );
};
