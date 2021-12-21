import { FunctionComponent, useContext } from "react";
import { SearchDataItemType } from "../App.d";
import { SearchWordContext } from "../context/SearchWordContext";
// import parse from "html-react-parser";

interface DropdownItemProps {
    item: SearchDataItemType;
}

const DropdownItem: FunctionComponent<DropdownItemProps> = ({ item }) => {
    const { searchWord } = useContext(SearchWordContext);
    const { name, regularPrice, salePrice } = item;
    const regexp = new RegExp(searchWord, "gi");
    const boldedSearchWord = name.replace(regexp, (match) => `<b>${match}</b>`);

    return (
        <p>
            <span dangerouslySetInnerHTML={{ __html: boldedSearchWord }}></span>
            <span style={{ color: "gray", marginLeft: "50px", textDecoration: "line-through" }}>${regularPrice}</span>
            <span style={{ color: "yellow", marginLeft: "50px" }}>${salePrice}</span>
        </p>
    );
};

export default DropdownItem;
