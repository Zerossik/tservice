import { useContext, createContext } from "react";

export const ConfirmContext = createContext();

export const useConfirm = () => useContext(ConfirmContext);
