import { FunctionComponent, useState } from "react";
import { SearchDataItemType } from "../App.d";
import DropdownList from "./DropdownList";

interface SearchWithDropdownProps {
    dataToSearch: SearchDataItemType[];
}

const SearchWithDropdown: FunctionComponent<SearchWithDropdownProps> = ({ dataToSearch }) => {
    // use search logic
    const [searchWord, setSearchWord] = useState("");

    // use search logic
    // ++use callback
    const handleChange = (e: { target: { value: string } }) => {
        const { value } = e.target;
        setSearchWord(value);
    };

    // use memo -> filter
    // Dropdown item
    const showDropdownList = dataToSearch.map((item, index) => (
        <DropdownList key={index} item={item} searchWord={searchWord} />
    ));
    return (
        <div className="search-with-dropdown">
            <label htmlFor="">Wyszukaj słowa: </label>
            <input type="text" value={searchWord} onChange={handleChange} />
            {searchWord.length >= 4 ? showDropdownList : ""}
        </div>
    );
};

export default SearchWithDropdown;
