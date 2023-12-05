// import { useLoaderData } from "react-router-dom";
// component
import { Modal } from "../Modal";
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
// data
import { tableHeader } from "../../fakeData";
import { useState } from "react";

const tableHeaderFiltered = tableHeader.filter((item) => item.isVisible);

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
          <p>Edit some card of appliance</p>
        </Modal>
      )}
    </>
  );
};
