import * as React from "react";
import { FunctionComponent } from "react";
import { dataEntries } from "./data/dataEntries";
import PaginatedTable from "./components/PaginatedTable";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    const elementsOnPage: number = 50;
    return (
        <div className="wrapper-app">
            <PaginatedTable dataEntries={dataEntries} elementsOnPage={elementsOnPage} />
        </div>
    );
};

export default App;
