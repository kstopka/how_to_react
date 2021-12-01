import * as React from "react";
import { FunctionComponent, useEffect } from "react";
import "../css/grid-wrapper.css";
import MasonryGridColumn from "./MasonryGridColumn";
// import { images } from "../images/images";
import images from "../Hooks/images";
import { useGridSettings } from "../Hooks/useGridSettings";

interface GridWrapperProps {
    width: number;
}

// const numbersOfColumns = (width: number) => {
//     if (width >= 1200) {
//         const styleColumns = { gridTemplateColumns: `repeat(4, 25%)` };
//         return styleColumns;
//     } else if (width < 1200 && width > 600) {
//         const styleColumns = { gridTemplateColumns: `repeat(2, 1fr)` };
//         return styleColumns;
//     } else if (width <= 600) {
//         const styleColumns = { gridTemplateColumns: `repeat(1, 1fr)` };
//         return styleColumns;
//     }
// };

const GridWrapper: FunctionComponent<GridWrapperProps> = ({ width }) => {
    const { numberOfImages, numberOfColumns, numberOfRows } = useGridSettings(width);

    // podzielic arrejke na 4 arrejki
    //do kazdej kolumny przeslac kolejne itemy

    const getMasonryGridColumn = images.map((item, index) => <MasonryGridColumn key={index} img={item} />);

    return <div className="grid-wrapper">{getMasonryGridColumn}</div>;
};

export default GridWrapper;
