import { FunctionComponent } from "react";
import Modal from "./components/Modal";
import { ModalProvider } from "./context/ModalContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <ModalProvider>
            <div>
                <Modal title="Modal Title" />
            </div>
        </ModalProvider>
    );
};

export default App;
