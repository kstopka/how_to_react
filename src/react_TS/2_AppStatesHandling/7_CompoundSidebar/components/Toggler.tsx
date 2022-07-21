import React, { FunctionComponent } from "react";
import "../style/toggler.css";

interface TogglerProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const Toggler: FunctionComponent<TogglerProps> = ({ isOpen, handleToggle }) => {
  return (
    <div onClick={handleToggle} className="wrapperToggler">
      <button>{isOpen ? "Close" : "Open"}</button>
    </div>
  );
};

export default Toggler;
