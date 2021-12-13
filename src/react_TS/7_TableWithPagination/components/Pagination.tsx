import * as React from "react";
import { FunctionComponent } from "react";

interface PaginationProps {
    txt: string;
    active: boolean;
    fn: () => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({ txt, active, fn }) => {
    return (
        <div className="pagination">
            <button onClick={fn} disabled={active}>
                {txt}
            </button>
        </div>
    );
};

export default Pagination;
