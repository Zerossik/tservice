import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
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
  // IconSort,
} from "./WorkTable.styled";
// component
import { Modal } from "../Modal";
import { EditOrderForm } from "../EditOrderForm/EditOrderForm";
import {
  selectContacts,
  selectIsTableVisible,
} from "../../redux/contacts/selectors";
import { useConfirm } from "../ConfirmService/context";
import { OrderView } from "../OrderView/OrderView";
import { formatData } from "../../utils";
import { limit } from "../../constants";
import { isTableVisible } from "../../redux/contacts/ContactSlice";
import { PATHS } from "../../constants";
import { selectTableSettings } from "../../redux/settingsUser/selectors";

export const WorkTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [tableSettingsFiltered, setTableSettingsFiltered] = useState([]);
  // const [sortedContacts, setSortedContacts] = useState([]);
  const [order, setOrder] = useState({});
  const [searchParams] = useSearchParams();
  const [activePage, setActivePage] = useState(1);

  const awitingPromiseRef = useRef();
  const confirm = useConfirm();
  const dispatch = useDispatch();
  const location = useLocation();
  const contacts = useSelector(selectContacts);
  const tableSettings = useSelector(selectTableSettings);
  const isTableVisibleSelect = useSelector(selectIsTableVisible);

  const isArchive = location.pathname === `/${PATHS.ARCHIVE}`;

  useEffect(() => {
    const page = searchParams.get("page");
    setActivePage(page === null ? 0 : page - 1);

    // Сортировка заголовков таблицы
    // фильтруем по "isVisible" и сортируем по порядку "order"
    const tableFiltered = tableSettings
      .filter((item) => {
        // отключаем доступ к полю "дата выдачи"
        if (!isArchive && item.columnName === "issueDate") return;
        return item.isVisible;
      })
      .sort((a, b) => a.order - b.order);

    // прячем таблицу, если отключены все колонки
    tableFiltered.length === 0 && dispatch(isTableVisible(false));
    if (tableFiltered.length > 0 && !isTableVisibleSelect) {
      dispatch(isTableVisible(true));
    }

    setTableSettingsFiltered(tableFiltered);

    // Сортируем контакты по-умолчанию
    // const sortedContactsByDefault = contacts.toSorted(
    //   (a, b) => a.orderNumber - b.orderNumber
    // );
    // setSortedContacts(sortedContactsByDefault);

    // setSortedContacts(contacts);
  }, [dispatch, tableSettings, searchParams, isArchive, isTableVisibleSelect]);

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

  //   settableSettingsFiltered(newTableHead);
  //   sortCollumn(selectedTableHeadCell);
  // };

  const handleClickOrder = (data, idx) => {
    confirm.openConfirm({
      component: (
        <OrderView
          data={data}
          idx={idx}
          closeConfirm={confirm.handleClose}
          isArchive={isArchive}
        />
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
      {tableSettingsFiltered.length > 0 && (
        <Table cellPadding="0">
          <Thead>
            <Row>
              {tableSettingsFiltered.map(({ id, buttonName }) => (
                <TableHead key={id} scope="col">
                  <ButtonWrapper>
                    <Button
                      type="button"
                      // $isActive={isActive}
                      // onClick={() =>
                      //   handleClickButtonSort(tableSettingsFiltered, id)
                      // }
                    >
                      {buttonName}
                      {/* стрелка указывающая на сортировку */}
                      {/* {isActive && <IconSort $sortDown={sortDown} />} */}
                    </Button>
                  </ButtonWrapper>
                </TableHead>
              ))}

              <TableHead key="editHead">Дії</TableHead>
            </Row>
          </Thead>
          <TableBody>
            {contacts.length === 0 && (
              <RowNoItem>
                <CellNoItem colSpan={tableSettingsFiltered.length + 1}>
                  Нічого нема :)
                </CellNoItem>
              </RowNoItem>
            )}

            {contacts.lehgth !== 0 &&
              contacts.map((item, idx) => (
                <Row
                  key={item._id}
                  onClick={() =>
                    handleClickOrder(item, activePage * limit + idx)
                  }
                >
                  {tableSettingsFiltered.map(({ id, columnName }) => {
                    return (
                      <Cell key={id}>
                        {formatData(
                          columnName,
                          item[columnName],
                          activePage * limit + idx
                        )}
                      </Cell>
                    );
                  })}

                  <Cell key="editCell">
                    <ButtonIconEdit
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOrderDataToEdit(item);
                      }}
                      disabled={isArchive}
                    >
                      <IconEdit />
                    </ButtonIconEdit>
                  </Cell>
                </Row>
              ))}
          </TableBody>
        </Table>
      )}

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
