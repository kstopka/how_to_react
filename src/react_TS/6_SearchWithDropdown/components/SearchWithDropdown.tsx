import { FunctionComponent, useCallback, useContext, useState } from "react";
import { SearchDataItemType } from "../App.d";
import DropdownList from "./DropdownList";
import { PattertToFindContext } from "../context/PattertToFindContext";

interface SearchWithDropdownProps {
    dataToSearch: SearchDataItemType[];
}

const SearchWithDropdown: FunctionComponent<SearchWithDropdownProps> = ({ dataToSearch }) => {
    // use search logic
    const { setPattertToFind } = useContext(PattertToFindContext);
    const [arrayWithCorrectResult, setArrayWithCorrectResult] = useState<SearchDataItemType[]>([]);

    // use search logic
    // ++use callback
    const searchFilter = useCallback(
        (value) => {
            const pattertToFind = new RegExp(value, "gi");
            setPattertToFind(pattertToFind);
            if (value.length < 4) {
                setPattertToFind(new RegExp("off"));
                return null;
            }
            const correctResult = dataToSearch.filter((item) => item.name.match(pattertToFind));
            setArrayWithCorrectResult(correctResult);
        },
        [dataToSearch, setPattertToFind]
    );

    // use memo -> filter
    // Dropdown item

    return (
        <div className="search-with-dropdown">
            <label htmlFor="">Wyszukaj słowa: </label>
            <input type="text" onChange={(e) => searchFilter(e.target.value)} />
            <DropdownList array={arrayWithCorrectResult} />
        </div>
    );
};

export default SearchWithDropdown;
