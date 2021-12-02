import * as React from "react";
import { FunctionComponent } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

interface ModalProps {
    isOpen: boolean;
}

const Modal: FunctionComponent<ModalProps> = ({ isOpen }) => {
    return (
        <div className="modal">
            <h1>Modal</h1>
        </div>
    );
};

export default Modal;
