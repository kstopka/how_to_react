import * as React from "react";
import { FunctionComponent } from "react";
import "../css/masonry-grid-column.css";
import MasonryGridCell from "./MasonryGridCell";

interface MasonryGridColumnProps {
    img: string;
}

const MasonryGridColumn: FunctionComponent<MasonryGridColumnProps> = ({ img }) => {
    return <div className="masonry-grid-column"></div>;
};

export default MasonryGridColumn;
