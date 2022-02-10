import * as React from "react";
import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Authentication from "./components/Authentication";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <Provider store={store}>
                <Authentication />
            </Provider>
        </div>
    );
};

export default App;
