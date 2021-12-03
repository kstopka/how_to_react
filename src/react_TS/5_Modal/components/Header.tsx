import * as React from "react";
import { useContext, useEffect } from "react";
import { ModalContext } from "../context/ModalContext";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = ({ children }) => {
    const { isOpen } = useContext(ModalContext);
    return (
        <Header>
            {isOpen ? (
                <div className="header">
                    <h1 className="title">Modal Title</h1>
                </div>
            ) : (
                ""
            )}
        </Header>
    );
};

export default Header;
