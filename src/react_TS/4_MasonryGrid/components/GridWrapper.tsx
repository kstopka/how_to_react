import * as React from "react";
import { FunctionComponent } from "react";
import "../css/grid-wrapper.css";
import MasonryGridColumn from "./MasonryGridColumn";

interface GridWrapperProps {
    width: number;
}

const numbersOfColumns = (width: number) => {
    if (width >= 1200) {
        const styleColumns = { gridTemplateColumns: `repeat(4, 1fr)` };
        return styleColumns;
    } else if (width < 1200 && width > 600) {
        const styleColumns = { gridTemplateColumns: `repeat(2, 1fr)` };
        return styleColumns;
    } else if (width <= 600) {
        const styleColumns = { gridTemplateColumns: `repeat(1, 1fr)` };
        return styleColumns;
    }
};

const GridWrapper: FunctionComponent<GridWrapperProps> = ({ width }) => {
    return (
        <div className="grid-wrapper" style={numbersOfColumns(width)}>
            <div className="column1">
                <div className="row1"></div>
                <div className="row2"></div>
                <div className="row3"></div>
                <div className="row4"></div>
                <div className="row5"></div>
            </div>
            <div className="column2">
                <div className="row1"></div>
                <div className="row2"></div>
                <div className="row3"></div>
                <div className="row4"></div>
                <div className="row5"></div>
            </div>
            <div className="column3">
                <div className="row1"></div>
                <div className="row2"></div>
                <div className="row3"></div>
                <div className="row4"></div>
                <div className="row5"></div>
            </div>
            <div className="column4">
                <div className="row1"></div>
                <div className="row2"></div>
                <div className="row3"></div>
                <div className="row4"></div>
                <div className="row5"></div>
            </div>
        </div>
    );
};

export default GridWrapper;
