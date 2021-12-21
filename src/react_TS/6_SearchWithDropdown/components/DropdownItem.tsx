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
    const boldedSearchWord = name.replace(searchWord, `<b>${searchWord}</b>`);
    //NOTE: wychodzi coś takiego " Fixed TOC - table of contents for <b>Word</b>Press plugin "
    // const showText = parse(`<p>${boldedSearchWord}</p>`);

    // wywołać jako html
    return (
        <p>
            {/* {boldedSearchWord} */}
            <p dangerouslySetInnerHTML={{ __html: boldedSearchWord }}></p>
            <span style={{ color: "gray", marginLeft: "50px", textDecoration: "line-through" }}>${regularPrice}</span>
            <span style={{ color: "yellow", marginLeft: "50px" }}>${salePrice}</span>
        </p>
    );
};

export default DropdownItem;
