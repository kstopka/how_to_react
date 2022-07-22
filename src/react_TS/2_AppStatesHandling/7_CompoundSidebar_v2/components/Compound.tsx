import React, { FunctionComponent, useState } from "react";
import { Toggler } from "./Toggler";
import { Sidebar } from "./Sidebar";
import { CompoundContext } from "../context/CompoundContext";

interface CompoundProps extends FunctionComponent {
  Toggler: FunctionComponent;
  Sidebar: FunctionComponent;
}

const Compound: CompoundProps = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CompoundContext.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </CompoundContext.Provider>
  );
};

Compound.Toggler = Toggler;
Compound.Sidebar = Sidebar;

export { Compound };
