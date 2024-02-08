import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import dateFormat from "dateformat";
// style
import {
  Table,
  Row,
  Thead,
  TableHead,
  TableBody,
  Cell,
  RowNoItem,
  CellNoItem,
  ButtonWrapper,
  Button,
  ButtonIconEdit,
  IconEdit,
  IconSort,
} from "./WorkTable.styled";
// component
import { Modal } from "../Modal";
import { EditOrderForm } from "../EditOrderForm/EditOrderForm";
import {
  selectContacts,
  selectTableHeader,
} from "../../redux/contacts/selectors";

export const WorkTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableHeaderFiltered, setTableHeaderFiltered] = useState([]);
  const [sortedContacts, setSortedContacts] = useState([]);
  const [order, setOrder] = useState({});
  const dispatch = useDispatch();
  const data = useLoaderData();
  const contacts = useSelector(selectContacts);
  const tableHeader = useSelector(selectTableHeader);

  useEffect(() => {
    // Сортировка заголовков таблицы
    // фильтруем по "isVisible" и сортируем по порядку "order"
    const tableHeaderFiltered = tableHeader
      .filter((item) => item.isVisible)
      .sort((a, b) => a.order - b.order);
    setTableHeaderFiltered(tableHeaderFiltered);

    // Сортируем контакты по-умолчанию
    // const sortedContactsByDefault = contacts.toSorted(
    //   (a, b) => a.orderNumber - b.orderNumber
    // );
    // setSortedContacts(sortedContactsByDefault);

    setSortedContacts(contacts);
  }, [dispatch, data, tableHeader, contacts]);

  const setOrderDataToEdit = (data) => {
    setOrder(data);
    toggleModal();
  };

  const sortCollumn = ({ columnName, sortDown }) => {
    if (!sortDown) {
      const newSortedContacts = contacts.toSorted((a, b) =>
        a[columnName].localeCompare(b[columnName])
      );
      setSortedContacts(newSortedContacts);
    }

    if (sortDown) {
      const newSortedContacts = contacts.toSorted((a, b) =>
        b[columnName].localeCompare(a[columnName])
      );
      setSortedContacts(newSortedContacts);
    }
  };

  const handleClickButtonSort = (tableHead, id) => {
    // меняем активную кнопку
    let selectedTableHeadCell = {};

    const newTableHead = tableHead.map((item) => {
      if (item.id === id) {
        selectedTableHeadCell = item;
        return { ...item, isActive: true, sortDown: !item.sortDown };
      }
      return { ...item, isActive: false, sortDown: null };
    });

    setTableHeaderFiltered(newTableHead);
    sortCollumn(selectedTableHeadCell);
  };

  const formatDate = (date) => {
    return dateFormat(date, "dd.mm.yyyy");
  };

  const formatPhoneNumber = (phoneNumber) => {
    const template = "xxx (xx) xxx-xx-xx";
    let formatedNumber = "";
    let num = 0;

    for (let i = 0; i < template.length; i++) {
      if (template[i] === "x") {
        formatedNumber = formatedNumber + phoneNumber[num];
        num++;
        continue;
      }

      formatedNumber = formatedNumber + template[i];
    }

    return formatedNumber;
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Table>
        <Thead>
          <Row>
            {tableHeaderFiltered.map(
              ({ id, buttonName, isActive, sortDown }) => (
                <TableHead key={id} scope="col">
                  <ButtonWrapper>
                    <Button
                      type="button"
                      $isActive={isActive}
                      onClick={() =>
                        handleClickButtonSort(tableHeaderFiltered, id)
                      }
                    >
                      {buttonName}
                      {isActive && <IconSort $sortDown={sortDown} />}
                    </Button>
                  </ButtonWrapper>
                </TableHead>
              )
            )}
            <TableHead>Дії</TableHead>
          </Row>
        </Thead>
        <TableBody>
          {sortedContacts.length === 0 && (
            <RowNoItem>
              <CellNoItem colSpan={tableHeaderFiltered.length + 1}>
                Нічого нема :)
              </CellNoItem>
            </RowNoItem>
          )}
          {sortedContacts.lehgth !== 0 &&
            sortedContacts.map((item) => (
              <Row key={item._id}>
                {tableHeaderFiltered.map(({ id, columnName }) => {
                  if (columnName === "createdAt") {
                    return <Cell key={id}>{formatDate(item[columnName])}</Cell>;
                  }

                  if (columnName === "phoneNumber") {
                    return (
                      <Cell key={id}>
                        {formatPhoneNumber(item[columnName])}
                      </Cell>
                    );
                  }

                  return <Cell key={id}>{item[columnName]}</Cell>;
                })}
                <Cell>
                  <ButtonIconEdit onClick={() => setOrderDataToEdit(item)}>
                    <IconEdit />
                  </ButtonIconEdit>
                </Cell>
              </Row>
            ))}
        </TableBody>
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
