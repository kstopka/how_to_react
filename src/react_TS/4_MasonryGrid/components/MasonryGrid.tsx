import { FunctionComponent } from "react";
import MasonryGridColumn from "./MasonryGridColumn";
import { useImagesForColumns } from "../App.hooks";

interface MasonryGridProps {
    numberOfAllColumns: number;
}

const MasonryGrid: FunctionComponent<MasonryGridProps> = ({ numberOfAllColumns }) => {
    const styleOfMasonryGrid = { gridTemplateColumns: `repeat(${numberOfAllColumns}, 1fr)` };
    const array = useImagesForColumns(numberOfAllColumns);

    const getMasonryGridColumn = array.map((item, index) => <MasonryGridColumn key={index} array={item} />);
    return (
        <div className="masonry-grid" style={styleOfMasonryGrid}>
            {getMasonryGridColumn}
        </div>
    );
};

export default MasonryGrid;
