import { FunctionComponent, useContext } from "react";
import { SearchDataItemType } from "../App.d";
import { PattertToFindContext } from "../context/PattertToFindContext";

interface DropdownItemProps {
    item: SearchDataItemType;
}

const DropdownItem: FunctionComponent<DropdownItemProps> = ({ item }) => {
    const { pattertToFind } = useContext(PattertToFindContext);
    const { name, regularPrice, salePrice } = item;
    const boldedSearchWord = name.replace(pattertToFind, (match) => `<b>${match}</b>`);

    return (
        <p>
            <span dangerouslySetInnerHTML={{ __html: boldedSearchWord }}></span>
            <span style={{ color: "gray", marginLeft: "50px", textDecoration: "line-through" }}>${regularPrice}</span>
            <span style={{ color: "yellow", marginLeft: "50px" }}>${salePrice}</span>
        </p>
    );
};

export default DropdownItem;
