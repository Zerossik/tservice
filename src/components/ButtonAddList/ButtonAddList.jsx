import { TbLetterT, TbLetterB, TbLetterM } from "react-icons/tb";
// style
import { ListOfButtons, ItemOfButtons } from "./ButtonAddList.styled";
// components
import { ButtonAdd } from "../ButtonAdd";

export const ButtonAddList = () => {
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
    </ListOfButtons>
  );
};
