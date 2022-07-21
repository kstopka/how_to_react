import React, { FunctionComponent } from "react";
import "../style/sidebar.css";
import { useActiveClass } from "../useActiveClass";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ isOpen }) => {
  const { activeClass } = useActiveClass(
    isOpen,
    "wrapperSidebar",
    "wrapperSidebarOpen"
  );
  return <div className={activeClass}></div>;
};

export default Sidebar;
