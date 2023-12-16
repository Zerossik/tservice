import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
// style
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
} from "../Select/Select.styled";
// components
import { Label } from "../Label";
import { ErrorInput } from "../ErrorInput";

export const SelectConst = ({ name, type, formik, labelText, fildsList }) => {
  const [openList, setOpenList] = useState(false);
  const [list, setList] = useState([]);
  const listRef = useRef();

  useEffect(() => {
    setList(fildsList);

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

  const handleClickOpenList = () => {
    setOpenList((prev) => !prev);
  };

  const handleClickButton = (type) => {
    formik.setFieldValue(name, type);
    setOpenList(false);
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
            onChange={formik.handleChange}
            value={formik.values[name]}
            readOnly
          />
          <Button type="button" onClick={handleClickOpenList}>
            <IconOpenList $isOpen={openList} />
          </Button>
        </InputWrapper>

        {openList && (
          <>
            <BackDrop />
            <List ref={listRef}>
              {list.map((item) => (
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

SelectConst.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  fildsList: PropTypes.array.isRequired,
};
