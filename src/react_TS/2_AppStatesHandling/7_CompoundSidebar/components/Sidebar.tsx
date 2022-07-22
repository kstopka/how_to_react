import React, { FunctionComponent } from "react";
import "../style/sidebar.css";
import { useActiveClass } from "../hooks/useActiveClass";

interface SidebarProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const listItems = ["Home", "Video", "Contact"];

const Sidebar: FunctionComponent<SidebarProps> = ({ isOpen, handleToggle }) => {
  const { activeClass } = useActiveClass(
    isOpen,
    "wrapperSidebar",
    "wrapperSidebarOpen"
  );
  return (
    <div className={activeClass}>
      <ul>
        {listItems.map((item, index) => (
          <li key={item + index} onClick={handleToggle}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
