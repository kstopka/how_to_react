import { FunctionComponent } from "react";
import { SearchDataItemType } from "../App.d";
import ShowText from "./ShowText";

interface DropdownItemProps {
    item: SearchDataItemType;
    searchWord: string;
}

const DropdownItem: FunctionComponent<DropdownItemProps> = ({ item, searchWord }) => {
    const textToSearching = item.name.toLocaleLowerCase();
    const searchWordLowerCase = searchWord.toLowerCase();
    const findCorrectSearchingItem = textToSearching.includes(searchWordLowerCase);

    const firstIndex = textToSearching.indexOf(searchWordLowerCase);
    const lastIndex = firstIndex + searchWord.length;

    return (
        <div className="dropdown-item">
            {findCorrectSearchingItem ? <ShowText firstIndex={firstIndex} lastIndex={lastIndex} item={item} /> : ""}
        </div>
    );
};

export default DropdownItem;
