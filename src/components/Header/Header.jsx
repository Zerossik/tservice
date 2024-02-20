import { useRef, useState } from "react";
import { useSelector } from "react-redux";
// styled
import {
  HeaderStyled,
  HeaderContainer,
  ButtonWrapper,
  Button,
  UserName,
  IconUser,
  DropDownList,
  DropDownItem,
  ItemTitle,
} from "./Header.styled";
// components
import { selectIsLoading, selectUser } from "../../redux/auth/selectors";
import { LogOut } from "../LogOut/LogOut";
import { DropDown } from "../DropDown";
import { ToggleTheme } from "../ToggleTheme";
// import { Modal } from "../Modal";
import { LoaderPretty } from "../LoaderPretty";
import { Logo } from "../Logo";
import { ButtonAddList } from "../ButtonAddList/ButtonAddList";
import { ButtonArchive } from "../ButtonArchive/ButtonArchive";

export const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const dropDownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleUserDropDown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  // const toggleModal = () => {
  //   setIsModalOpen((prev) => !prev);
  // };

  return (
    <>
      {isLoading && <LoaderPretty />}
      <HeaderStyled>
        <HeaderContainer>
          <Logo />

          <ButtonWrapper>
            <ButtonAddList />
            <ButtonArchive />
          </ButtonWrapper>

          <ButtonWrapper>
            {/* <Button type="button" onClick={toggleModal}>
              <IconSettings />
            </Button> */}
            <UserName>{user ? user.name : "Anonimus"}</UserName>
            <Button type="button" onClick={toggleUserDropDown} ref={buttonRef}>
              <IconUser />
            </Button>

            {isDropDownOpen && (
              <DropDown
                styled={{ top: "100%", right: 0 }}
                onToggleDropDown={toggleUserDropDown}
                dropRef={dropDownRef}
                buttonRef={buttonRef}
              >
                <DropDownList ref={dropDownRef}>
                  <DropDownItem>
                    <ItemTitle>Тема</ItemTitle>
                    <ToggleTheme />
                  </DropDownItem>
                  <DropDownItem>
                    <LogOut />
                  </DropDownItem>
                </DropDownList>
              </DropDown>
            )}
          </ButtonWrapper>
        </HeaderContainer>
      </HeaderStyled>

      {/* {isModalOpen && (
        <Modal title="Налаштування" onToggleModal={toggleModal}></Modal>
      )} */}
    </>
  );
};
