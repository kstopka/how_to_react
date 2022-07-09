import { createContext, useState } from "react";
import { ModalContextType } from "../App.d";

export const ModalContext = createContext<ModalContextType>({
    isOpen: true,
    setIsOpen: () => {},
});

export const ModalProvider = ({ children }: { children: any }) => {
    const [isOpen, setIsOpen] = useState(true);

    return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>;
};
