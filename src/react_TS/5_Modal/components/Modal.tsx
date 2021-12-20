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
        <>
            <a className="modal__overlay" onClick={toggle}></a>

            <div className="modal">
                <Header toggle={toggle} title={title} />
                <Content />
                <Footer toggle={toggle} />
            </div>
        </>
    );
};
export default Modal;
