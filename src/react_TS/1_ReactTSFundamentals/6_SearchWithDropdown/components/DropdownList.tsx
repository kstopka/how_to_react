import { FunctionComponent, useMemo } from "react";
import DropdownItem from "./DropdownItem";
import { SearchDataItemType } from "../App.d";

interface DropdownListProps {
    array: SearchDataItemType[];
}

const DropdownList: FunctionComponent<DropdownListProps> = ({ array }) => {
    const checkedChangesInArray = useMemo(() => array, [array]);

    if (!checkedChangesInArray) {
        return null;
    }

    const correctItemFromArray = checkedChangesInArray.map((item, index) => <DropdownItem key={index} item={item} />);
    return <div className="dropdown-list">{correctItemFromArray}</div>;
};

export default DropdownList;
