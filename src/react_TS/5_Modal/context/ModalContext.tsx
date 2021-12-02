import { createContext } from "react";
import { ModalContextType } from "../App.d";
//TODO: dopisać typy
export const modalContext = createContext({
    isOpen: true,
    handleModalToggle: () => {},
});
