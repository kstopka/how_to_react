import * as React from "react";
import { FunctionComponent } from "react";
import { usePagination } from "../hooks/usePagination";
import Pagination from "./Pagination";

interface PaginatedTableProps {
    dataEntries: number[];
}

const PaginatedTable: FunctionComponent<PaginatedTableProps> = ({ dataEntries }) => {
    // const elementsOnPage: number = 10;
    //NOTE: const [{ actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy }, { goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage }] = usePagination(dataEntries);
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
            {/* {//NOTE: Pagination jako button???} */}
            {actualPageIdx ? (
                <Pagination txt="goToFirestPage" active={false} action={goToFirestPage} />
            ) : (
                <Pagination txt="goToFirestPage" active={true} action={goToFirestPage} />
            )}

            {actualPageIdx ? (
                <Pagination txt="goToPrevPage" active={false} action={goToPrevPage} />
            ) : (
                <Pagination txt="goToPrevPage" active={true} action={goToPrevPage} />
            )}

            {/* //NOTE: nie wiem jak pobrać liczbę i przekazać? */}
            <form onSubmit={(e) => goToPage}>
                <input type="text" onChange={(e) => console.log(e.target.value)} />
                <button type="submit">goToPage</button>
                {/* <Pagination txt="goToPage" active={false} fn={() => goToPage} /> */}
            </form>

            {actualPageIdx === lastPageIdx ? (
                <Pagination txt="goToNextPage" active={true} action={goToNextPage} />
            ) : (
                <Pagination txt="goToNextPage" active={false} action={goToNextPage} />
            )}

            {actualPageIdx === lastPageIdx ? (
                <Pagination txt="goToLastPage" active={true} action={goToLastPage} />
            ) : (
                <Pagination txt="goToLastPage" active={false} action={goToLastPage} />
            )}
            <ul>{elementsOnPage}</ul>
        </div>
    );
};

export default PaginatedTable;
