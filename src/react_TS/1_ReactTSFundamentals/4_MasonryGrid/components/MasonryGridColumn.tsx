import { FunctionComponent } from "react";
import MasonryGridCell from "./MasonryGridCell";

interface MasonryGridColumnProps {
    array: string[];
}

const MasonryGridColumn: FunctionComponent<MasonryGridColumnProps> = ({ array }) => {
    const masonryGridCellArray = array.map((item, index) => <MasonryGridCell key={index} img={item} />);
    return <div className="masonry-grid-column">{masonryGridCellArray}</div>;
};

export default MasonryGridColumn;
