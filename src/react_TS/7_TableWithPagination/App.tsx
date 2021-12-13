import * as React from "react";
import { FunctionComponent } from "react";
import { dataEntries } from "./data/dataEntries";
import PaginationTable from "./components/PaginatedTable";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper-app">
            <PaginationTable dataEntries={dataEntries} />
        </div>
    );
};

export default App;
