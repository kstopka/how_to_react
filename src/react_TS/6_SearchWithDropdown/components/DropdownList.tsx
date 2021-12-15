import { FunctionComponent, useContext } from "react";
import DropdownItem from "./DropdownItem";
import { SearchDataItemType } from "../App.d";
import { SearchWordContext, SearchWordProvaider } from "../context/SearchWordContext";

interface DropdownListProps {
    array: SearchDataItemType[];
}

const DropdownList: FunctionComponent<DropdownListProps> = ({ array }) => {
    const { searchWord, setSearchWord } = useContext(SearchWordContext);

    if (searchWord.length < 4) {
        return null;
    }
    // szukasz regexpem po wartościach
    const correctItemFromArray = array.map((item, index) => <DropdownItem key={index} item={item} />);
    return <div className="dropdown-list">{correctItemFromArray}</div>;
};

export default DropdownList;
