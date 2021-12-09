import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import Modal from "./components/Modal";
import { ModalProvider, ModalContext } from "./context/ModalContext";

interface AppProps {}
//NOTE: w momencie zmiany isOpen modal powinien znikać

const App: FunctionComponent<AppProps> = () => {
    const { isOpen } = useContext(ModalContext);
    const showModal = () => (isOpen ? <Modal /> : NaN);
    useEffect(() => {
        if (!isOpen) {
            showModal();
        }
    });

    return <ModalProvider>{showModal()}</ModalProvider>;
};

export default App;
