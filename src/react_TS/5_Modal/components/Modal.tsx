import * as React from "react";
import { FunctionComponent, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { ModalContext, ModalProvider } from "../context/ModalContext";

const { Provider } = ModalContext;

interface ModalProps {
    // isOpen: boolean;
}

const Modal: FunctionComponent<ModalProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return <Provider value={{ isOpen, setIsOpen }}>{children}</Provider>;
};

// Modal.Header = Header;
// Modal.Content = Content;
// Modal.Footer = Footer;

export default Modal;
