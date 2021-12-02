import { FunctionComponent } from "react";

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
