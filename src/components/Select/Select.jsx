import { useEffect, useRef, useState, useCallback } from "react";
import PropTypes from "prop-types";
// styled
import {
  Wrapper,
  InputWrapper,
  Input,
  Button,
  ButtonClear,
  IconClear,
  IconOpenList,
  List,
  ListItem,
  ListNoItem,
  ButtonList,
  ButtonWrapper,
} from "./Select.styled";
// components
import { Label } from "../Label";
import { ErrorInput } from "../ErrorInput";
import { ButtonListEdit } from "../ButtonListEdit/ButtonListEdit";
import { ButtonListDelete } from "../ButtonListDelete/ButtonListDelete";

export const Select = ({
  idFlag,
  editable,
  deletable,
  name,
  type,
  formik,
  labelText,
  fildsList,
  styleLabel,
  list,
}) => {
  const [openList, setOpenList] = useState(false);
  const [filteredTypes, setFilteredTypes] = useState([]);
  const listRef = useRef();
  const inputRef = useRef();
  const inputWrapperRef = useRef();

  const filteredListOfTypes = useCallback(
    (list, value) => {
      const normalized = value.toLowerCase();
      return list.filter((item) =>
        item[name].toLowerCase().includes(normalized)
      );
    },
    [name]
  );

  useEffect(() => {
    setFilteredTypes(filteredListOfTypes(fildsList, formik.values[name]));

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
  }, [fildsList, filteredListOfTypes, formik.values, name]);

  const handleClickOpenList = () => {
    setFilteredTypes(filteredListOfTypes(fildsList, formik.values[name]));
    setOpenList((prev) => !prev);

    // listRef.current?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "end",
    // });
  };

  const handleClickButtonInList = (id, type) => {
    idFlag && formik.setFieldValue("id", id);
    formik.setFieldValue(name, type);
    setOpenList(false);
  };

  const handleInputChange = (event) => {
    const {
      target: { value },
    } = event;

    formik.handleChange(event);

    if (value.trim() === "") {
      setFilteredTypes(fildsList);
    }

    if (value.trim() !== "") {
      setFilteredTypes(filteredListOfTypes(fildsList, value));
      setOpenList(true);
    }
  };

  const handleClickClear = () => {
    formik.setFieldValue(name, "");
    inputRef.current.focus();
    setOpenList(true);
  };

  return (
    <>
      <Wrapper>
        <Label htmlFor={name} labelText={labelText} styleLabel={styleLabel} />
        <InputWrapper ref={inputWrapperRef}>
          <Input
            id={name}
            name={name}
            type={type}
            onChange={handleInputChange}
            value={formik.values[name]}
            onClick={handleClickOpenList}
            ref={inputRef}
          />
          {formik.values[name] !== "" && (
            <ButtonClear type="button" onClick={handleClickClear}>
              <IconClear />
            </ButtonClear>
          )}
          <Button type="button" onClick={handleClickOpenList}>
            <IconOpenList $isOpen={openList} />
          </Button>
        </InputWrapper>

        {openList && (
          <>
            <List ref={listRef} list={list}>
              {filteredTypes.length === 0 && (
                <ListNoItem>Нічого нема :)</ListNoItem>
              )}
              {filteredTypes.length > 0 &&
                filteredTypes.map((item) => (
                  <ListItem key={item._id}>
                    <ButtonList
                      type="button"
                      onClick={() =>
                        handleClickButtonInList(item._id, item[name])
                      }
                    >
                      {item[name]}
                    </ButtonList>

                    <ButtonWrapper>
                      {editable && (
                        <ButtonListEdit
                          fildName={item[name]}
                          selectName={name}
                          closeList={setOpenList}
                        />
                      )}
                      {deletable && (
                        <ButtonListDelete
                          fildName={item[name]}
                          selectName={name}
                          closeList={setOpenList}
                          id={item._id}
                        />
                      )}
                    </ButtonWrapper>
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
  idFlag: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  labelText: PropTypes.string,
  fildsList: PropTypes.array.isRequired,
  styleLabel: PropTypes.object,
  list: PropTypes.string,
  editable: PropTypes.bool,
  deletable: PropTypes.bool,
};
