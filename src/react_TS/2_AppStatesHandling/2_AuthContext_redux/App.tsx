import * as React from "react";
import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Authentication from "./components/Authentication";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    const checkCredentials = (login: string, password: string) => {
        // const isLogged = usersCredentials.some((element) => element.login === login && element.password === password);
        // return isLogged;
    };
    //sprawdzenie coockies

    return (
        <div className="wrapper">
            <Provider store={store}>
                <Authentication />
            </Provider>
        </div>
    );
};

export default App;
