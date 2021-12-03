import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import Modal from "./components/Modal";
import { ModalProvider, ModalContext } from "./context/ModalContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    const { isOpen } = useContext(ModalContext);

    return <ModalProvider>{isOpen ? <Modal /> : NaN}</ModalProvider>;
};

export default App;
