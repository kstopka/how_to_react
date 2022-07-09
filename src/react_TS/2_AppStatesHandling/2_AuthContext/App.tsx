import * as React from "react";
import { FunctionComponent } from "react";
import Authentication from "./components/Authentication";
import { AuthProvider } from "./context/AuthContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <AuthProvider>
                <Authentication />
            </AuthProvider>
        </div>
    );
};

export default App;
