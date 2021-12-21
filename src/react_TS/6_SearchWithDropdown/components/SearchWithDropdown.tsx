import { FunctionComponent, useCallback, useContext, useState, useEffect } from "react";
import { SearchDataItemType } from "../App.d";
import DropdownList from "./DropdownList";
import { SearchWordContext, SearchWordProvaider } from "../context/SearchWordContext";
import { Item } from "react-bootstrap/lib/Breadcrumb";

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
            const pattertToFind = new RegExp(searchWord, "gi");
            const result = dataToSearch.filter((item) => item.name.match(pattertToFind));
            setArrayWithCorrectResult(result);
        },
        [dataToSearch, searchWord, setSearchWord]
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
