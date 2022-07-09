import * as React from "react";
import { FunctionComponent } from "react";
import MultistepForm from "./components/MultistepForm";
import { DataProvider } from "./context/DataContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <DataProvider>
                <MultistepForm />
            </DataProvider>
        </div>
    );
};

export default App;
