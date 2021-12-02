import { FunctionComponent } from "react";
import MasonryGrid from "./MasonryGrid";
import { useGridSettings } from "../App.hooks";

interface GridWrapperProps {
    width: number;
}

const GridWrapper: FunctionComponent<GridWrapperProps> = ({ width }) => {
    const { numberOfImages, numberOfAllColumns } = useGridSettings(width);

    return (
        <div className="grid-wrapper">
            <MasonryGrid numberOfAllColumns={numberOfAllColumns} numberOfImages={numberOfImages} />
        </div>
    );
};

export default GridWrapper;
