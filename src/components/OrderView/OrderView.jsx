import { useSelector } from "react-redux";
import PropTypes from "prop-types";
// styled
import {
  Wrapper,
  WrapperTable,
  ButtonWrapper,
  Table,
  TableBody,
  Row,
  HeaderCells,
  Cell,
} from "./OrderView.styled";
// components
import { ButtonForm } from "../ButtonForm";
import { selectTableHeader } from "../../redux/contacts/selectors";
import { formatData } from "../../utils";

export const OrderView = ({ data, idx, closeConfirm }) => {
  const tableHeader = useSelector(selectTableHeader);

  return (
    <Wrapper>
      <WrapperTable>
        <Table>
          <TableBody>
            {tableHeader &&
              tableHeader.map(({ id, buttonName, columnName }) => (
                <Row key={id}>
                  <HeaderCells>{buttonName}</HeaderCells>
                  <Cell>{formatData(columnName, data[columnName], idx)}</Cell>
                </Row>
              ))}
          </TableBody>
        </Table>
      </WrapperTable>

      <ButtonWrapper>
        <ButtonForm type="button" onClick={closeConfirm} buttonName="Закрити" />
      </ButtonWrapper>
    </Wrapper>
  );
};

OrderView.propTypes = {
  data: PropTypes.object.isRequired,
  idx: PropTypes.number,
  closeConfirm: PropTypes.func.isRequired,
};
