import { useLocation, useNavigate } from "react-router-dom";
import { TbLetterT, TbLetterB, TbLetterM } from "react-icons/tb";
// style
import {
  ListOfButtons,
  ItemOfButtons,
  ItemButtonArchive,
  ButtonArchive,
  ButtonText,
} from "./ButtonAddList.styled";
// components
import { ButtonAdd } from "../ButtonAdd";
import { PATHS } from "../../constants";

export const ButtonAddList = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const isArchive = location.pathname === "/archive";

  const handleButtonClick = () => {
    isArchive ? navigate(`/${PATHS.SERVICES}`) : navigate(`/${PATHS.ARCHIVE}`);
  };

  return (
    <ListOfButtons>
      <ItemOfButtons>
        <ButtonAdd icon={<TbLetterT />} typeOfAdd="type" />
      </ItemOfButtons>
      <ItemOfButtons>
        <ButtonAdd icon={<TbLetterB />} typeOfAdd="manufacturer" />
      </ItemOfButtons>
      <ItemOfButtons>
        <ButtonAdd icon={<TbLetterM />} typeOfAdd="masterName" />
      </ItemOfButtons>
      <ItemButtonArchive>
        <ButtonArchive onClick={handleButtonClick} $isArchive={isArchive}>
          <ButtonText $isArchive={isArchive}>
            {isArchive ? "Вийти з архіву" : "Зайти до архіву"}
          </ButtonText>
        </ButtonArchive>
      </ItemButtonArchive>
    </ListOfButtons>
  );
};
