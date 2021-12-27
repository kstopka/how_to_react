import * as React from "react";
import { FunctionComponent } from "react";
import MultistepForm from "./components/MultistepForm";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <MultistepForm />
        </div>
    );
};

export default App;
