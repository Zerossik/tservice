import { RessPassword } from "../../services/authAPI";
import { FormButton, InputStyled, Label } from "../Register/Register.styled";
import { StyledForm, StyledWp } from "./RessPassForm.styled";

export const RessPassForm = () => {
  const handlerRstPass = (event) => {
    event.preventDefault();
    const { value } = event.target.email;

    if (value.trim()) {
      console.log("sended email");
      RessPassword(value)
        .then(() => console.log("Ok"))
        .catch((error) => console.log(error.message));
    }
    return;
  };
  return (
    <StyledForm onSubmit={handlerRstPass}>
      <StyledWp>
        <legend>Скидання Паролю</legend>
        <Label htmlFor="ress_pass">Email</Label>
        <InputStyled
          type="email"
          name="email"
          id="ress_pass"
          placeholder="Email"
        />
        <FormButton type="submit">Відправити</FormButton>
      </StyledWp>
    </StyledForm>
  );
};
