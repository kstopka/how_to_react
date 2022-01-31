import * as React from "react";
import { FunctionComponent } from "react";
import Cart from "./components/Cart";
import { ProviderCart } from "./context/contextProduct";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <ProviderCart>
                <Cart />
            </ProviderCart>
        </div>
    );
};

export default App;
