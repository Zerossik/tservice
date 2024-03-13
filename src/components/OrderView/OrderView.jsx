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
import { formatData } from "../../utils";
import { selectTableSettings } from "../../redux/settingsUser/selectors";

export const OrderView = ({ data, idx, closeConfirm }) => {
  const tableSettings = useSelector(selectTableSettings);

  return (
    <Wrapper>
      <WrapperTable>
        <Table>
          <TableBody>
            {tableSettings &&
              tableSettings.map(({ id, buttonName, columnName }) => (
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
