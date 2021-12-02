import * as React from "react";
import { FunctionComponent } from "react";
import Modal from "./components/Modal";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return <Modal isOpen={true}></Modal>;
};

export default App;
