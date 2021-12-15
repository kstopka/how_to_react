import { FunctionComponent } from "react";
import { SearchDataItemType } from "../App.d";

interface DropdownItemProps {
    item: SearchDataItemType;
}

// 'mama'.replace(toFound,`<b>${toFound}</b>`)

const DropdownItem: FunctionComponent<DropdownItemProps> = ({ item }) => {
    const { name, regularPrice, salePrice } = item;
    // const startText = name.slice(0, firstIndex);
    // const boldedText = name.slice(firstIndex, lastIndex);
    // const endText = name.slice(lastIndex);

    return (
        <p>
            {name}

            <span style={{ color: "gray", marginLeft: "50px", textDecoration: "line-through" }}>${regularPrice}</span>
            <span style={{ color: "yellow", marginLeft: "50px" }}>${salePrice}</span>
        </p>
    );
};

export default DropdownItem;
