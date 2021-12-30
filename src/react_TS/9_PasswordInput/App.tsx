import * as React from "react";
import { FunctionComponent } from "react";
import PasswordInput from "./components/PasswordInput";
import { CheckLettersProvaider } from "./context/ChcekLettersContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <CheckLettersProvaider>
                <PasswordInput password={"Polska"} />
            </CheckLettersProvaider>
        </div>
    );
};

export default App;
