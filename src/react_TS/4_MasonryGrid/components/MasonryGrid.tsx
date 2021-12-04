import { FunctionComponent } from "react";
import MasonryGridColumn from "./MasonryGridColumn";
import { imagesForColumns } from "../App.hooks";

interface MasonryGridProps {
    numberOfAllColumns: number;
    numberOfImages: number;
}

const MasonryGrid: FunctionComponent<MasonryGridProps> = ({ numberOfAllColumns, numberOfImages }) => {
    const styleOfMasonryGrid = { gridTemplateColumns: `repeat(${numberOfAllColumns}, 1fr)` };
    const array = imagesForColumns(numberOfImages, numberOfAllColumns);

    const getMasonryGridColumn = array.map((item, index) => <MasonryGridColumn key={index} array={item} />);
    return (
        <div className="masonry-grid" style={styleOfMasonryGrid}>
            {getMasonryGridColumn}
        </div>
    );
};

export default MasonryGrid;
