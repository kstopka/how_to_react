import * as React from "react";
import { FunctionComponent } from "react";
import Cart from "./components/Cart";
import { ProviderProduct } from "./context/contextProduct";
import { ProviderCart } from "./context/contextCart";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <ProviderProduct>
                <ProviderCart>
                    <Cart />
                </ProviderCart>
            </ProviderProduct>
        </div>
    );
};

export default App;
