import { FunctionComponent, useState, useEffect } from "react";
import DropdownList from "./DropdownList";

interface SearchWithDropdownProps {}

const SearchWithDropdown: FunctionComponent<SearchWithDropdownProps> = () => {
    const [searchWord, setSearchWord] = useState("");
    const handleChange = (e: { target: { value: string } }) => {
        const { value } = e.target;
        setSearchWord(value);
    };
    useEffect(() => {}, []);
    return (
        <div className="search-with-dropdown">
            <label htmlFor="">Wyszukaj słowa: </label>
            <input type="text" value={searchWord} onChange={handleChange} />
            {searchWord.length >= 4 ? <DropdownList searchWord={searchWord} /> : ""}
        </div>
    );
};

export default SearchWithDropdown;
//NOTE: Zrobic context aby pobierac tablice
