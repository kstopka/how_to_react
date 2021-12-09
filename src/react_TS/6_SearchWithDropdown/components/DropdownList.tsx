import { FunctionComponent } from "react";
import { searchData } from "../data/searchData";
import DropdownItem from "./DropdownItem";

interface DropdownListProps {
    searchWord: string;
}

const DropdownList: FunctionComponent<DropdownListProps> = ({ searchWord }) => {
    const showDropdownList = searchData.map((item, index) => (
        <DropdownItem key={index} item={item} searchWord={searchWord} />
    ));
    console.log("=============================");
    return <div className="dropdown-list">{showDropdownList}</div>;
};

export default DropdownList;
