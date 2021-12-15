import { FunctionComponent, useCallback, useContext, useState, useEffect } from "react";
import { SearchDataItemType } from "../App.d";
import DropdownList from "./DropdownList";
import { SearchWordContext, SearchWordProvaider } from "../context/SearchWordContext";

interface SearchWithDropdownProps {
    dataToSearch: SearchDataItemType[];
}

const SearchWithDropdown: FunctionComponent<SearchWithDropdownProps> = ({ dataToSearch }) => {
    // use search logic
    const { searchWord, setSearchWord } = useContext(SearchWordContext);
    const [arrayWithCorrectResult, setArrayWithCorrectResult] = useState<SearchDataItemType[]>([]);

    // use search logic
    // ++use callback
    const searchFilter = useCallback(
        (value) => {
            setSearchWord(value);
            if (value.length < 4) {
                return null;
            }
            const filter = value.toLowerCase();
            const result: SearchDataItemType[] = dataToSearch.filter(
                (item) => item.name.toLowerCase().indexOf(filter) > -1
            );
            setArrayWithCorrectResult(result);
        },
        [searchWord]
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
