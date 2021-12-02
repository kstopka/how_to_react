import { FunctionComponent } from "react";
import MasonryGridColumn from "./MasonryGridColumn";
import { imagesForColumns } from "../App.hooks";

interface MasonryGridProps {
    numberOfAllColumns: number;
    numberOfImages: number;
}

const MasonryGrid: FunctionComponent<MasonryGridProps> = ({ numberOfAllColumns, numberOfImages }) => {
    const styleOfMasonryGrid = { gridTemplateColumns: `repeat(${numberOfAllColumns}, 1fr)` };

    const arrayOfMasonryGridColumn = Array(numberOfAllColumns).fill(<MasonryGridColumn array={[""]} />);

    const getMasonryGridColumn = arrayOfMasonryGridColumn.map(
        (item, index) =>
            (item = (
                <MasonryGridColumn key={index} array={imagesForColumns(numberOfImages, numberOfAllColumns, index)} />
            ))
    );
    return (
        <div className="masonry-grid" style={styleOfMasonryGrid}>
            {getMasonryGridColumn}
        </div>
    );
};

export default MasonryGrid;
