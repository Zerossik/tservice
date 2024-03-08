import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
import { selectIsContactsLoading } from "../../redux/contacts/selectors";
import { LoaderPretty } from "../LoaderPretty";
import { PATHS } from "../../constants";

const defaultType = { _id: "1", type: "Усе" };

export const SelectSort = () => {
  const [openList, setOpenList] = useState(false);
  const [valueInput, setValueInput] = useState("Усе");
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const location = useLocation();
  const navigate = useNavigate();
  const types = useSelector(selectDeviceTypes);
  const isLoading = useSelector(selectIsContactsLoading);
  const listRef = useRef();
  const inputWrapperRef = useRef();

  let params = new URLSearchParams(location.search);
  const typeOfSort = params.get("type");

  useEffect(() => {
    if (types.length !== 0) {
      setList([defaultType, ...rewriteDeviceTypeArr(types)]);
    }

    if (filter) {
      setValueInput("Результати пошуку");
    }

    if (typeOfSort) {
      setValueInput(typeOfSort);
    }

    if (location?.state?.logoReset) {
      setValueInput("Усе");
    }

    const handleClickAway = (e) => {
      if (
        listRef.current &&
        !listRef.current.contains(e.target) &&
        !inputWrapperRef.current.contains(e.target)
      ) {
        setOpenList(false);
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [filter, location?.state?.logoReset, types]);

  const handleClickOpenList = () => {
    setOpenList((prev) => !prev);
  };

  const handleClickButtonInList = (value) => {
    setValueInput(value);

    if (value === "Усе" && `/${PATHS.SERVICES}` === location.pathname) {
      navigate(`/${PATHS.SERVICES}`);
    } else if (value === "Усе" && `/${PATHS.ARCHIVE}` === location.pathname) {
      navigate(`/${PATHS.ARCHIVE}`);
    } else {
      setSearchParams({ type: value });
    }

    setOpenList(false);
  };

  return (
    <>
      {isLoading && <LoaderPretty />}
      <Wrapper>
        <InputWrapper ref={inputWrapperRef}>
          <FakeInput onClick={handleClickOpenList}>{valueInput}</FakeInput>

          <Button type="button" onClick={handleClickOpenList}>
            <IconOpenList $isOpen={openList} />
          </Button>
        </InputWrapper>

        {openList && (
          <List ref={listRef}>
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
    </>
  );
};
