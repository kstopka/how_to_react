import * as React from "react";
import { FunctionComponent } from "react";
import Cart from "./components/Cart";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <Cart />
        </div>
    );
};

export default App;
