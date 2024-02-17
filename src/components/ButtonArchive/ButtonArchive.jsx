import { useLocation, useNavigate } from "react-router-dom";
// styled
import { ButtonArch, BtnText } from "./ButtonArchive.styled";
// components
import { PATHS } from "../../constants";

export const ButtonArchive = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const isArchive = location.pathname === "/archive";

  const handleButtonClick = () => {
    navigate(`/${PATHS[isArchive ? "SERVICES" : "ARCHIVE"]}`);
  };

  return (
    <ButtonArch onClick={handleButtonClick} $isArchive={isArchive}>
      <BtnText $isArchive={isArchive}>
        {isArchive ? "Вийти з архіву" : "Зайти до архіву"}
      </BtnText>
    </ButtonArch>
  );
};
