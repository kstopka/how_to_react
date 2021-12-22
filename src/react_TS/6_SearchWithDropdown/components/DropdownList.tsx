import { FunctionComponent, useContext } from "react";
import DropdownItem from "./DropdownItem";
import { SearchDataItemType } from "../App.d";
import { PattertToFindContext } from "../context/PattertToFindContext";

interface DropdownListProps {
    array: SearchDataItemType[];
}

const DropdownList: FunctionComponent<DropdownListProps> = ({ array }) => {
    const { pattertToFind } = useContext(PattertToFindContext);

    if (!pattertToFind) {
        return null;
    }

    // useMemo
    const correctItemFromArray = array.map((item, index) => <DropdownItem key={index} item={item} />);
    return <div className="dropdown-list">{correctItemFromArray}</div>;
};

export default DropdownList;
