import * as React from "react";
import { FunctionComponent } from "react";
import images from "../Hooks/images";
import "../css/masnory-grid-cell.css";

interface MasonryGridCellProps {}

const MasonryGridCell: FunctionComponent<MasonryGridCellProps> = () => {
    return (
        <div className="masnory-grid-cell">
            <img src={images[1]} alt="" />
        </div>
    );
};

export default MasonryGridCell;
