import * as React from "react";
import { FunctionComponent } from "react";
import Parallax from "./components/Parallax";
import { ProviderParallax } from "./context/contextParallax";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <ProviderParallax>
                <Parallax
                    children={<div>Children</div>}
                    bgImage={
                        "https://previews.123rf.com/images/rglinsky/rglinsky1108/rglinsky110800027/10134031-vertical-capture-of-famous-eiffel-tower-in-paris-france-.jpg?fj=1"
                    }
                />
            </ProviderParallax>
        </div>
    );
};

export default App;
