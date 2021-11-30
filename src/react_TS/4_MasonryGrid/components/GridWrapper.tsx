import * as React from "react";
import { FunctionComponent } from "react";

interface GridWrapperProps {}

const GridWrapper: FunctionComponent<GridWrapperProps> = ({ width, children }) => {
    return (
        <div>
            <h1>width:</h1>
        </div>
    );
};

export default GridWrapper;
