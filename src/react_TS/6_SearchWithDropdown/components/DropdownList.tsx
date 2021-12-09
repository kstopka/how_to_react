import { FunctionComponent } from "react";
import DropdownItem from "./DropdownItem";
import { SearchDataItemType } from "../App.d";

interface DropdownListProps {
    searchWord: string;
    item: SearchDataItemType;
}

const DropdownList: FunctionComponent<DropdownListProps> = ({ searchWord, item }) => {
    const textToSearching = item.name.toLocaleLowerCase();
    const searchWordLowerCase = searchWord.toLowerCase();
    const findCorrectSearchingItem = textToSearching.includes(searchWordLowerCase);

    const firstIndex = textToSearching.indexOf(searchWordLowerCase);
    const lastIndex = firstIndex + searchWord.length;

    return (
        <div className="dropdown-list">
            {findCorrectSearchingItem ? <DropdownItem firstIndex={firstIndex} lastIndex={lastIndex} item={item} /> : ""}
        </div>
    );
};

export default DropdownList;
