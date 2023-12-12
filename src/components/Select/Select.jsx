import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
// styled
import {
  Wrapper,
  InputWrapper,
  Input,
  Button,
  IconOpenList,
  List,
  ListItem,
  ButtonList,
  BackDrop,
} from "./Select.styled";
// components
import { Label } from "../Label";
import { ErrorInput } from "../ErrorInput";

export const Select = ({ name, type, formik, labelText, fildsList }) => {
  const [search, setSearch] = useState("");
  const [openList, setOpenList] = useState(false);
  const [filteredTypes, setFilteredTypes] = useState([]);
  const listRef = useRef();

  useEffect(() => {
    setFilteredTypes(fildsList);

    const handleClickAway = (e) => {
      if (listRef.current && !listRef.current.contains(e.target)) {
        setOpenList(false);
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [fildsList]);

  const filteredListOfTypes = (list, value) => {
    const normalized = value.toLowerCase();
    return list.filter((item) => item[name].toLowerCase().includes(normalized));
  };

  const handleClickOpenList = () => {
    if (search !== "") {
      setFilteredTypes(filteredListOfTypes(fildsList, search));
    }

    setOpenList((prev) => !prev);
  };

  const handleClickButton = (type) => {
    setSearch(type);
    formik.setFieldValue(name, type);
    setOpenList(false);
  };

  const handleInputChange = (event) => {
    const {
      target: { value },
    } = event;

    setSearch(value);
    formik.handleChange(event);

    if (value.trim() === "") {
      setFilteredTypes(fildsList);
    }

    if (value.trim() !== "") {
      setFilteredTypes(filteredListOfTypes(fildsList, value));
      setOpenList(true);
    }
  };

  return (
    <>
      <Wrapper>
        <Label htmlFor={name} labelText={labelText} />
        <InputWrapper>
          <Input
            id={name}
            name={name}
            type={type}
            onChange={handleInputChange}
            onFocus={handleClickOpenList}
            value={formik.values[name]}
          />
          <Button type="button" onClick={handleClickOpenList}>
            <IconOpenList $isOpen={openList} />
          </Button>
        </InputWrapper>
        {openList && filteredTypes.length > 0 && (
          <>
            <BackDrop />
            <List ref={listRef}>
              {filteredTypes.map((item) => (
                <ListItem key={item.id}>
                  <ButtonList
                    type="button"
                    onClick={() => handleClickButton(item[name])}
                  >
                    {item[name]}
                  </ButtonList>
                </ListItem>
              ))}
            </List>
          </>
        )}
        {formik.errors[name] ? <ErrorInput text={formik.errors[name]} /> : null}
      </Wrapper>
    </>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  formik: PropTypes.object,
  labelText: PropTypes.string,
  fildsList: PropTypes.array,
};
