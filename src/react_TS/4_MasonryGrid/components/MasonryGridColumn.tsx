import * as React from "react";
import { useState, useEffect, FunctionComponent } from "react";
import "../css/masonry-grid-column.css";

interface MasonryGridColumnProps {}

const MasonryGridColumn: FunctionComponent<MasonryGridColumnProps> = () => {
    return (
        <div className="masonry-grid-column">
            <div className="row1"></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
    );
};

export default MasonryGridColumn;
