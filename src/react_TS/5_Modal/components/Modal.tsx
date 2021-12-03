import { FunctionComponent, useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "../css/modal.css";

interface ModalProps {}

const Modal: FunctionComponent<ModalProps> = () => {
    const { isOpen, setIsOpen } = useContext(ModalContext);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const title = "Modal-Header Title";
    //TODO: po kliknięciu w div.modal ma znikać modal.

    return (
        <div className="modal" onClick={toggle}>
            <Header toggle={toggle} title={title} />
            {/* <Content /> */}
            {/* <Footer /> */}
        </div>
    );
};
export default Modal;
