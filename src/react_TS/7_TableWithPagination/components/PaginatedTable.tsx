import { FunctionComponent, useMemo } from "react";
import { usePagination } from "../hooks/usePagination";
import Pagination from "./Pagination";

interface PaginatedTableProps {
    //NOTE: data ma mieć any[]???
    dataEntries: any[];
    elementsOnPage: number;
}

const PaginatedTable: FunctionComponent<PaginatedTableProps> = ({ dataEntries, elementsOnPage }) => {
    const [
        { actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
        { goToFirestPage, goToPrevPage, goToPage, goToNextPage, goToLastPage },
    ] = usePagination(dataEntries, elementsOnPage);

    const options = useMemo(
        () => ({
            actualPageIdx,
            lastPageIdx,
            goToFirestPage,
            goToPrevPage,
            goToPage,
            goToNextPage,
            goToLastPage,
        }),
        [actualPageIdx, lastPageIdx, goToFirestPage, goToPrevPage, goToPage, goToNextPage, goToLastPage]
    );

    const showElementsOnPage = entriesOnSelectedPage.map((item, index) => <li key={index}>{item}</li>);

    if (isBusy) {
        return (
            <div>
                <h1 style={{ color: "red" }}>LOADING...</h1>
            </div>
        );
    }

    return (
        <div className="paginated-table">
            <Pagination options={options} />
            <ul>{showElementsOnPage}</ul>
        </div>
    );
};

export default PaginatedTable;
