import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import Modal from "./components/Modal";
import { ModalProvider, ModalContext } from "./context/ModalContext";

interface AppProps {}
//NOTE: w momencie zmiany isOpen modal powinien znikać

const App: FunctionComponent<AppProps> = () => {
    // const { isOpen } = useContext(ModalContext);
    // const showModal = () => (isOpen ? <Modal /> : "");
    // useEffect(() => {
    //     if (!isOpen) {
    //         showModal();
    //     }
    // });

    return (
        <ModalProvider>
            <div>
                <Modal title="Modal Title" />
            </div>
        </ModalProvider>
    );
};

export default App;
