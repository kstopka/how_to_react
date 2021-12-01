import * as React from "react";
import { FunctionComponent } from "react";
import images from "../Hooks/images";
import "../css/masnory-grid-cell.css";

interface MasonryGridCellProps {
    img: string;
}

const MasonryGridCell: FunctionComponent<MasonryGridCellProps> = ({ img }) => {
    return (
        <div className="masnory-grid-cell">
            <img src={img} alt="" />
        </div>
    );
};

export default MasonryGridCell;
