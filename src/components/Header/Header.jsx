import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
// styled
import {
  HeaderStyled,
  HeaderContainer,
  Logo,
  ButtonWrapper,
  Button,
  UserName,
  IconUser,
  IconSettings,
  DropDownList,
  DropDownItem,
} from "./Header.styled";
// components
import { Loader } from "../Loader";
import { selectIsLoading, selectUser } from "../../redux/auth/selectors";
import { LogOut } from "../LogOut/LogOut";
import { DropDown } from "../DropDown";
import { ToggleTheme } from "../ToggleTheme";

export const Header = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const dropDownRef = useRef(null);

  const toggleUserDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <HeaderStyled>
        <HeaderContainer>
          <Logo>TService</Logo>

          <ButtonWrapper>
            <Button type="button">
              <IconSettings />
            </Button>
            <UserName>{user ? user.name : "Anonimus"}</UserName>
            <Button type="button" onClick={toggleUserDropDown}>
              <IconUser />
            </Button>

            {isOpen && (
              <DropDown
                styled={{ top: "100%", right: 0 }}
                onToggleDropDown={toggleUserDropDown}
                dropRef={dropDownRef}
              >
                <DropDownList ref={dropDownRef}>
                  <DropDownItem>
                    <ToggleTheme onToggleTheme={toggleTheme} />
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
    </>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func,
};
