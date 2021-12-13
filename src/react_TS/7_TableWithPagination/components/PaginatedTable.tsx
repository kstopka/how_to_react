import * as React from "react";
import { FunctionComponent } from "react";
import { usePagination } from "../hooks/usePagination";
import Pagination from "./Pagination";

interface PaginatedTableProps {
    dataEntries: number[];
}

const PaginatedTable: FunctionComponent<PaginatedTableProps> = ({ dataEntries }) => {
    // const elementsOnPage: number = 10;
    const {
        actualPageIdx,
        lastPageIdx,
        entriesOnSelectedPage,
        imBusy,
        goToFirestPage,
        goToPrevPage,
        goToPage,
        goToNextPage,
        goToLastPage,
    } = usePagination(dataEntries);

    const elementsOnPage = entriesOnSelectedPage.map((item, index) => <li key={index}>{item}</li>);
    return (
        <div className="paginated-table">
            <p>Actual Page: {actualPageIdx + 1}</p>
            {actualPageIdx ? (
                <Pagination txt="goToFirestPage" active={false} fn={goToFirestPage} />
            ) : (
                <Pagination txt="goToFirestPage" active={true} fn={goToFirestPage} />
            )}

            {actualPageIdx ? (
                <Pagination txt="goToPrevPage" active={false} fn={goToPrevPage} />
            ) : (
                <Pagination txt="goToPrevPage" active={true} fn={goToPrevPage} />
            )}
            <form onSubmit={(e) => goToPage}>
                <input type="text" onChange={(e) => console.log(e.target.value)} />
                <button type="submit">goToPage</button>
                {/* <Pagination txt="goToPage" active={false} fn={() => goToPage} /> */}
            </form>

            {actualPageIdx === lastPageIdx ? (
                <Pagination txt="goToNextPage" active={true} fn={goToNextPage} />
            ) : (
                <Pagination txt="goToNextPage" active={false} fn={goToNextPage} />
            )}

            {actualPageIdx === lastPageIdx ? (
                <Pagination txt="goToLastPage" active={true} fn={goToLastPage} />
            ) : (
                <Pagination txt="goToLastPage" active={false} fn={goToLastPage} />
            )}
            <ul>{elementsOnPage}</ul>
        </div>
    );
};

export default PaginatedTable;
