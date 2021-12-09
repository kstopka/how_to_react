import { FunctionComponent } from "react";
import { SearchDataItemType } from "../App.d";

interface DropdownItemProps {
    item: SearchDataItemType;
    searchWord: string;
}

const BoldSearchWord = ({
    startText,
    boldedText,
    endText,
}: {
    startText: string;
    boldedText: string;
    endText: string;
}) => (
    <p>
        {startText}
        <span style={{ fontWeight: "bold" }}>{boldedText}</span>
        {endText}
    </p>
);

const DropdownItem: FunctionComponent<DropdownItemProps> = ({ item, searchWord }) => {
    const textToSearching = item.name.toLocaleLowerCase();
    const searchWordLowerCase = searchWord.toLowerCase();
    const findCorrectSearchingItem = textToSearching.includes(searchWordLowerCase);

    const firstIndex = textToSearching.indexOf(searchWordLowerCase);
    const lastIndex = firstIndex + searchWord.length;

    const startText = item.name.slice(0, firstIndex);
    const boldedText = item.name.slice(firstIndex, lastIndex);
    const endText = item.name.slice(lastIndex);

    return (
        <div className="dropdown-item">
            {findCorrectSearchingItem ? (
                <BoldSearchWord startText={startText} boldedText={boldedText} endText={endText} item={item} />
            ) : (
                ""
            )}
        </div>
    );
};

export default DropdownItem;
