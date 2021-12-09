import { FunctionComponent, useState } from "react";
import DropdownList from "./DropdownList";
import { searchData } from "../data/searchData";

interface SearchWithDropdownProps {}

const SearchWithDropdown: FunctionComponent<SearchWithDropdownProps> = () => {
    const [searchWord, setSearchWord] = useState("");
    const handleChange = (e: { target: { value: string } }) => {
        const { value } = e.target;
        setSearchWord(value);
    };
    const showDropdownList = searchData.map((item, index) => (
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
//NOTE: Zrobic context aby pobierac tablice ??? chyba się nie opłaca
