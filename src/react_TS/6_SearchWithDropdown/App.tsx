import { FunctionComponent } from "react";
import { PattertToFindProvaider } from "./context/PattertToFindContext";
import SearchWithDropdown from "./components/SearchWithDropdown";
import { searchData } from "./data/searchData";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <h1>App Search With Dropdown</h1>
            <PattertToFindProvaider>
                <SearchWithDropdown dataToSearch={searchData} />
            </PattertToFindProvaider>
        </div>
    );
};

export default App;
