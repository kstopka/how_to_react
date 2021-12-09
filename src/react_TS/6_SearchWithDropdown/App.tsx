import { FunctionComponent } from "react";
import SearchWithDropdownProps from "./components/SearchWithDropdown";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <h1>App Search With Dropdown</h1>
            <SearchWithDropdownProps />
        </div>
    );
};

export default App;
