import * as React from "react";
import { FunctionComponent } from "react";
import PasswordInput from "./components/PasswordInput";
import { PasswordProvider } from "./context/PasswordContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <PasswordProvider>
                <PasswordInput password={"PolskaMistrzem"} />
            </PasswordProvider>
        </div>
    );
};

export default App;
