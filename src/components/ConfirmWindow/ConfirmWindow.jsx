import { useEffect } from "react";
import PropTypes from "prop-types";
// style
import {
  BackDrop,
  Wrapper,
  MessageWrap,
  Message,
  List,
  ListItem,
} from "./ConfirmWindow.styled";
// components
import { ButtonForm } from "../ButtonForm";

export const ConfirmWindow = ({ close, options }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        close();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  const handleClickCancel = () => {
    options.awaitAnswer.reject(close);
  };

  const handleClickOk = () => {
    options.awaitAnswer.resolve(close);
  };

  return (
    <BackDrop onClick={handleBackDropClick}>
      <Wrapper>
        {options.component ? (
          options.component
        ) : (
          <MessageWrap>
            <Message>{options.message}</Message>
            <List>
              <ListItem>
                <ButtonForm
                  type="button"
                  buttonName="Відмінити"
                  onClick={handleClickCancel}
                />
              </ListItem>
              <ListItem>
                <ButtonForm
                  type="button"
                  buttonName="Закрити"
                  onClick={handleClickOk}
                />
              </ListItem>
            </List>
          </MessageWrap>
        )}
      </Wrapper>
    </BackDrop>
  );
};

ConfirmWindow.propTypes = {
  options: PropTypes.object,
  close: PropTypes.func,
};
