import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { HiCpuChip, HiMiniUsers, HiMiniInboxArrowDown } from "react-icons/hi2";
// styled
import {
  HeaderStyled,
  HeaderContainer,
  Logo,
  ButtonWrapper,
  Button,
  UserName,
  IconUser,
  DropDownList,
  DropDownItem,
  ItemTitle,
  // ListSettings,
  // ItemListSettings,
  ListOfButtons,
  ItemOfButtons,
} from "./Header.styled";
// components
import { selectIsLoading, selectUser } from "../../redux/auth/selectors";
import { LogOut } from "../LogOut/LogOut";
import { DropDown } from "../DropDown";
import { ToggleTheme } from "../ToggleTheme";
import { Modal } from "../Modal";
import { LoaderPretty } from "../LoaderPretty";
import { SettingsBtn } from "../SettingsBtn";
import { TypeAddForm } from "../TypeAddForm";
import { TypeEditForm } from "../TypeEditForm";
import { TypeDeleteForm } from "../TypeDeleteForm";
import { ManufacturerAddForm } from "../ManufacturerAddForm";
import { ManufacturerEditForm } from "../ManufacturerEditForm";
import { ManufacturerDeleteForm } from "../ManufacturerDeleteForm";
import { MasterDeleteForm } from "../MasterDeleteForm";
import { MasterAddForm } from "../MasterAddForm";

export const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const dropDownRef = useRef(null);

  const toggleUserDropDown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const btns = [
    {
      id: "1",
      icon: <HiCpuChip />,
      forms: [
        { id: "f1", form: <TypeAddForm /> },
        { id: "f2", form: <TypeEditForm /> },
        { id: "f3", form: <TypeDeleteForm /> },
      ],
    },
    {
      id: "2",
      icon: <HiMiniInboxArrowDown />,
      forms: [
        { id: "f1", form: <ManufacturerAddForm /> },
        { id: "f2", form: <ManufacturerEditForm /> },
        { id: "f3", form: <ManufacturerDeleteForm /> },
      ],
    },
    {
      id: "3",
      icon: <HiMiniUsers />,
      forms: [
        { id: "f1", form: <MasterAddForm /> },
        { id: "f2", form: <MasterDeleteForm /> },
      ],
    },
  ];

  return (
    <>
      {isLoading && <LoaderPretty />}
      <HeaderStyled>
        <HeaderContainer>
          <Logo>TService</Logo>

          <ListOfButtons>
            {btns.map(({ id, icon, forms }) => (
              <ItemOfButtons key={id}>
                <SettingsBtn icon={icon} forms={forms} />
              </ItemOfButtons>
            ))}
          </ListOfButtons>

          <ButtonWrapper>
            {/* <Button type="button" onClick={toggleModal}>
              <IconSettings />
            </Button> */}
            <UserName>{user ? user.name : "Anonimus"}</UserName>
            <Button type="button" onClick={toggleUserDropDown}>
              <IconUser />
            </Button>

            {isDropDownOpen && (
              <DropDown
                styled={{ top: "100%", right: 0 }}
                onToggleDropDown={toggleUserDropDown}
                dropRef={dropDownRef}
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

      {isModalOpen && (
        <Modal title="Налаштування" onToggleModal={toggleModal}></Modal>
      )}
    </>
  );
};
