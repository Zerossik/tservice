import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useLocation, useSearchParams } from "react-router-dom";
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
import { limit } from "../../constants";

export const WorkTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [tableHeaderFiltered, setTableHeaderFiltered] = useState([]);
  // const [sortedContacts, setSortedContacts] = useState([]);
  const [order, setOrder] = useState({});
  const [searchParams] = useSearchParams();
  const [activePage, setActivePage] = useState(1);

  const awitingPromiseRef = useRef();
  const confirm = useConfirm();
  const dispatch = useDispatch();
  const data = useLoaderData();
  const contacts = useSelector(selectContacts);
  const tableHeader = useSelector(selectTableHeader);
  let location = useLocation();

  const isArchive = location.pathname === "/archive";

  useEffect(() => {
    const page = searchParams.get("page");
    setActivePage(page === null ? 0 : page - 1);

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

    // setSortedContacts(contacts);
  }, [dispatch, data, tableHeader, contacts, searchParams]);

  const setOrderDataToEdit = (data) => {
    setOrder(data);
    toggleModal();
  };

  // const sortCollumn = ({ columnName, sortDown }) => {
  //   if (!sortDown) {
  //     const newSortedContacts = contacts.toSorted((a, b) =>
  //       a[columnName].localeCompare(b[columnName])
  //     );
  //     setSortedContacts(newSortedContacts);
  //   }

  //   if (sortDown) {
  //     const newSortedContacts = contacts.toSorted((a, b) =>
  //       b[columnName].localeCompare(a[columnName])
  //     );
  //     setSortedContacts(newSortedContacts);
  //   }
  // };

  // const handleClickButtonSort = (tableHead, id) => {
  //   // меняем активную кнопку
  //   let selectedTableHeadCell = {};

  //   const newTableHead = tableHead.map((item) => {
  //     if (item.id === id) {
  //       selectedTableHeadCell = item;
  //       return { ...item, isActive: true, sortDown: !item.sortDown };
  //     }
  //     return { ...item, isActive: false, sortDown: null };
  //   });

  //   setTableHeaderFiltered(newTableHead);
  //   sortCollumn(selectedTableHeadCell);
  // };

  const handleClickOrder = (data, idx) => {
    confirm.openConfirm({
      component: (
        <OrderView data={data} idx={idx} closeConfirm={confirm.handleClose} />
      ),
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
                      // $isActive={isActive}
                      // onClick={() =>
                      //   handleClickButtonSort(tableHeaderFiltered, id)
                      // }
                    >
                      {buttonName}
                      {isActive && <IconSort $sortDown={sortDown} />}
                    </Button>
                  </ButtonWrapper>
                </TableHead>
              )
            )}

            {/* когда нет колонок нужно добавить пустые TableHead */}
            {tableHeaderFiltered.length === 1 && <TableHead />}

            <TableHead>Дії</TableHead>
          </Row>
        </Thead>
        <TableBody>
          {contacts.length === 0 && (
            <RowNoItem>
              <CellNoItem colSpan={tableHeaderFiltered.length + 1}>
                Нічого нема :)
              </CellNoItem>
            </RowNoItem>
          )}

          {contacts.lehgth !== 0 &&
            contacts.map((item, idx) => (
              <Row key={item._id}>
                {tableHeaderFiltered.map(({ id, columnName }) => {
                  return (
                    <>
                      <Cell
                        key={id}
                        onClick={() => {
                          handleClickOrder(item, activePage * limit + idx);
                        }}
                      >
                        {formatData(
                          columnName,
                          item[columnName],
                          activePage * limit + idx
                        )}
                      </Cell>
                    </>
                  );
                })}

                {/* когда нет колонок нужно добавить пустые Cell */}
                {tableHeaderFiltered.length === 1 && <Cell />}

                <Cell>
                  <ButtonIconEdit
                    onClick={() => setOrderDataToEdit(item)}
                    disabled={isArchive}
                  >
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
