import { FunctionComponent, useContext, useCallback } from "react";
import { ModalContext } from "../context/ModalContext";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "../css/modal.css";

interface ModalProps {
    title: string;
}

const Modal: FunctionComponent<ModalProps> = ({ title }) => {
    const { isOpen, setIsOpen } = useContext(ModalContext);
    const toggle = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen, setIsOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal" onClick={toggle}>
            <Header toggle={toggle} title={title} />
            <Content />
            <Footer toggle={toggle} />
        </div>
    );
};
export default Modal;
