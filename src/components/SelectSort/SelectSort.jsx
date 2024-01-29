import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// style
import {
  Wrapper,
  InputWrapper,
  FakeInput,
  Button,
  IconOpenList,
  List,
  ListItem,
  ButtonList,
} from "./SelectSort.styled";
// components
import { selectDeviceTypes } from "../../redux/settingsUser/selectors";
import { rewriteDeviceTypeArr } from "../../utils";
import {
  getAllThunk,
  getContactsByTypeThunk,
} from "../../redux/contacts/contactsThunks";

const defaultType = { _id: "1", type: "Усе" };

export const SelectSort = () => {
  const [openList, setOpenList] = useState(false);
  const [valueInput, setValueInput] = useState("Усе");
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const types = useSelector(selectDeviceTypes);

  useEffect(() => {
    if (types.length !== 0) {
      setList([defaultType, ...rewriteDeviceTypeArr(types)]);
    }
  }, [types]);

  const handleClickOpenList = () => {
    setOpenList((prev) => !prev);
  };

  const handleClickButtonInList = (value) => {
    setValueInput(value);

    if (value === "Усе") {
      dispatch(getAllThunk())
        .unwrap()
        .then()
        .catch(() => {
          toast.warning("Щось пішло не так, спробуйте ще раз");
        });
    } else {
      dispatch(getContactsByTypeThunk(value))
        .unwrap()
        .then()
        .catch(() => {
          toast.warning("Щось пішло не так, спробуйте ще раз");
        });
    }

    setOpenList(false);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <FakeInput onClick={handleClickOpenList}>{valueInput}</FakeInput>

        <Button type="button" onClick={handleClickOpenList}>
          <IconOpenList $isOpen={openList} />
        </Button>
      </InputWrapper>

      {openList && (
        <List>
          {list.length > 0 &&
            list.map((item) => (
              <ListItem key={item._id}>
                <ButtonList
                  type="button"
                  onClick={() => handleClickButtonInList(item.type)}
                >
                  {item.type}
                </ButtonList>
              </ListItem>
            ))}
        </List>
      )}
    </Wrapper>
  );
};
