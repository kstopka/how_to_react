import * as React from "react";
import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import Authentication from "./components/Authentication";

const store = createStore(rootReducer);
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
