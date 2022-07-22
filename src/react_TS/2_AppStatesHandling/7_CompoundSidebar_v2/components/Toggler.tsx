import React, { FunctionComponent, useContext } from "react";
import { CompoundContext } from "../context/CompoundContext";
import "../style/toggler.css";

export const Toggler: FunctionComponent = () => {
  const { isOpen, setIsOpen } = useContext(CompoundContext);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="wrapperToggler">
      <button>{isOpen ? "Close" : "Open"}</button>
    </div>
  );
};
