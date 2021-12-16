import * as React from "react";
import { FunctionComponent } from "react";
import { usePagination } from "../hooks/usePagination";
import Pagination from "./Pagination";
import { usePaginationReturn } from "../App.d";

interface PaginatedTableProps {
    dataEntries: number[];
}

const PaginatedTable: FunctionComponent<PaginatedTableProps> = ({ dataEntries }) => {
    const elementsOnPage: number = 50;
    const [
        { actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
        { goToFirestPage, goToPrevPage, goToPage, goToNextPage, goToLastPage },
    ] = usePagination(dataEntries, elementsOnPage);
    console.log(isBusy);

    const showElementsOnPage = entriesOnSelectedPage.map((item, index) => <li key={index}>{item},</li>);
    return (
        <div className="paginated-table">
            <Pagination
                actualPageIdx={actualPageIdx}
                lastPageIdx={lastPageIdx}
                isBusy={isBusy}
                goToFirestPage={goToFirestPage}
                goToPrevPage={goToPrevPage}
                goToPage={goToPage}
                goToNextPage={goToNextPage}
                goToLastPage={goToLastPage}
            />
            <ul>{showElementsOnPage}</ul>
        </div>
    );
};

export default PaginatedTable;
