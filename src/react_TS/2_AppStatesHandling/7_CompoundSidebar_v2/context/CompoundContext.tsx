import { createContext } from "react";

interface ICompoundContext {
  isOpen: boolean;
  setIsOpen: (label: boolean) => void;
}

const initialContext: ICompoundContext = {
  isOpen: false,
  setIsOpen: () => {},
};

export const CompoundContext = createContext<ICompoundContext>(initialContext);
