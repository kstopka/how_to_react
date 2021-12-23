import * as React from "react";
import { FunctionComponent } from "react";
import PasswordInput from "./components/PasswordInput";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <PasswordInput password={"Polska"} />
        </div>
    );
};

export default App;
