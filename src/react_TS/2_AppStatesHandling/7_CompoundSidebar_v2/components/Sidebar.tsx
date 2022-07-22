import React, { FunctionComponent, useContext } from "react";
import { CompoundContext } from "../context/CompoundContext";
import { useActiveClass } from "../hooks/useActiveClass";
import "../style/sidebar.css";

const listItems = ["Home", "Video", "Contact"];

export const Sidebar: FunctionComponent = () => {
  const { isOpen, setIsOpen } = useContext(CompoundContext);
  const { activeClass } = useActiveClass(
    isOpen,
    "wrapperSidebar",
    "wrapperSidebarOpen"
  );
  return (
    <div className={activeClass}>
      <ul>
        {listItems.map((item, index) => (
          <li key={item + index} onClick={() => setIsOpen(!isOpen)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
