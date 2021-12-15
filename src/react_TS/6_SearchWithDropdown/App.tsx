import { FunctionComponent } from "react";
import SearchWithDropdown from "./components/SearchWithDropdown";
import { searchData } from "./data/searchData";
import { SearchWordContext, SearchWordProvaider } from "./context/SearchWordContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <h1>App Search With Dropdown</h1>
            <SearchWordProvaider>
                <SearchWithDropdown dataToSearch={searchData} />
            </SearchWordProvaider>
        </div>
    );
};

export default App;
