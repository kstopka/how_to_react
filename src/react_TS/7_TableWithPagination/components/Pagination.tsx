import * as React from "react";
import { FunctionComponent } from "react";

interface PaginationProps {
    txt: string;
    active: boolean;
    action: () => void;
}

//const Pagination = ({ paginationState, paginationActions }) => {};
const Pagination: FunctionComponent<PaginationProps> = ({ txt, active, action }) => {
    return (
        <div className="pagination">
            <button onClick={action} disabled={active}>
                {txt}
            </button>
        </div>
    );
};

export default Pagination;
