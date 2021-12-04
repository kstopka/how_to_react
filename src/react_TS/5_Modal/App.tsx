import * as React from "react";
import { FunctionComponent, useContext } from "react";
import Modal from "./components/Modal";
import { ModalProvider, ModalContext } from "./context/ModalContext";

interface AppProps {}
//NOTE: w momencie zmiany isOpen modal powinien znikać

const App: FunctionComponent<AppProps> = () => {
    const { isOpen } = useContext(ModalContext);

    return <ModalProvider>{isOpen ? <Modal /> : NaN}</ModalProvider>;
};

export default App;
