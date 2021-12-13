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
    return (
        //NOTE: na cały modal onClick zmienia isOpen
        <div className="modal" onClick={toggle}>
            <Header toggle={toggle} title={title} />
            <Content />
            <Footer toggle={toggle} />
        </div>
    );
};
export default Modal;
