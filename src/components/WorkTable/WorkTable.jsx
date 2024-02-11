import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
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
import { useConfirm } from "../ConfirmService/context";
import { OrderView } from "../OrderView/OrderView";
import { formatData } from "../../utils";

export const WorkTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [tableHeaderFiltered, setTableHeaderFiltered] = useState([]);
  const [sortedContacts, setSortedContacts] = useState([]);
  const [order, setOrder] = useState({});
  const awitingPromiseRef = useRef();
  const confirm = useConfirm();
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

  const handleClickOrder = (data) => {
    confirm.openConfirm({
      component: <OrderView data={data} closeConfirm={confirm.handleClose} />,
    });
  };

  const toggleModal = () => {
    if (isFormEdit) {
      return new Promise((resolve, reject) => {
        awitingPromiseRef.current = { resolve, reject };

        confirm.openConfirm({
          message: "Якщо ви закриєте вікно, ви втратите введені дані! Закрити?",
          awaitAnswer: awitingPromiseRef.current,
        });
      })
        .then((closeConfirm) => {
          closeConfirm();
          setIsModalOpen(false);
          setIsFormEdit(false);
        })
        .catch((closeConfirm) => {
          closeConfirm();
        });
    }

    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Table cellPadding="0">
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
                  return (
                    <Cell
                      key={id}
                      onClick={() => {
                        handleClickOrder(item);
                      }}
                    >
                      {formatData(columnName, item[columnName])}
                    </Cell>
                  );
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
          <EditOrderForm
            id={order._id}
            order={order}
            closeModal={setIsModalOpen}
            isFormEdit={setIsFormEdit}
          />
        </Modal>
      )}
    </>
  );
};
