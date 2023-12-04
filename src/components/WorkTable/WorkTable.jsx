// style
import { Table, Row, Thead, TableHead, Cell, Button } from "./WorkTable.styled";

const buttonsFilter = [
  {
    id: "1",
    buttonName: "#",
    sortName: "number",
    isActive: true,
    sortDown: true,
  },
  {
    id: "2",
    buttonName: "Ім’я",
    sortNmae: "clientName",
    isActive: false,
    sortDown: true,
  },
  {
    id: "3",
    buttonName: "Номер телефон",
    sortNmae: "phone",
    isActive: false,
    sortDown: true,
  },
  {
    id: "4",
    buttonName: "Дата прийняття",
    sortNmae: "date",
    isActive: false,
    sortDown: true,
  },
  {
    id: "5",
    buttonName: "Сума до сплати",
    sortNmae: "price",
    isActive: false,
    sortDown: true,
  },
];

export const WorkTable = () => {
  return (
    <Table>
      <Thead>
        <Row>
          {buttonsFilter.map(({ id, buttonName }) => (
            <TableHead key={id}>
              <Button type="button">{buttonName}</Button>
            </TableHead>
          ))}
          <TableHead>Статус</TableHead>
          <TableHead>Дії</TableHead>
        </Row>
      </Thead>
      <tbody>
        <Row>
          <Cell>1</Cell>
          <Cell>Смітюх Микола</Cell>
          <Cell>380957770000</Cell>
          <Cell>20.11.2023</Cell>
          <Cell>499грн</Cell>
          <Cell>Чекає виконання</Cell>
          <Cell>btn btn btn</Cell>
        </Row>
      </tbody>
    </Table>
  );
};

{
  /* <table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    </tr>
  </table> */
}
