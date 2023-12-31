import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
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
// data
import { tableHeader } from "../../fakeData";

const tableHeaderFiltered = tableHeader.filter((item) => item.isVisible);

const data = {
  type: "Laptop",
  manufacturer: "Samsung",
  model: "S21 ULTRA",
  customerName: "customerName",
  phoneNumber: "380456783648",
  failure: "failure description",
  deviceID: "device IMAI or SN",
  price: 200,
  status: "Прийнято",
  masterName: "Mark Hren",
  endDate: "end repair date",
  description: "Your description",
};

export const WorkTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const gadgetList = useLoaderData();

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
            {/* <TableHead>Статус</TableHead> */}
            <TableHead>Дії</TableHead>
          </Row>
        </Thead>
        <tbody>
          <Row>
            <Cell>1</Cell>
            <Cell>Смітюх Микола</Cell>
            <Cell>Phone</Cell>
            <Cell>Xiaomi Redmi</Cell>
            <Cell>20.11.2023</Cell>
            <Cell>499грн</Cell>
            <Cell>Gotovo</Cell>
            <Cell>
              <ButtonIconDelete onClick={toggleModal}>
                <IconDelete />
              </ButtonIconDelete>
            </Cell>
          </Row>
        </tbody>
      </Table>

      {isModalOpen && (
        <Modal onToggleModal={toggleModal}>
          <EditOrderForm id="6584a1e84275aea9779bde16" order={data} />
        </Modal>
      )}
    </>
  );
};
