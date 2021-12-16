import { FunctionComponent } from "react";
import PaginationButton from "./PaginationButton";
import { PaginationType } from "../App.d";

interface PaginationProps {
    settings: PaginationType;
}

const Pagination: FunctionComponent<PaginationProps> = ({ settings }) => {
    const { actualPageIdx, lastPageIdx, goToFirestPage, goToPrevPage, goToPage, goToNextPage, goToLastPage } = settings;
    return (
        <div className="pagination">
            {actualPageIdx ? (
                <PaginationButton txt="goToFirestPage" action={goToFirestPage} />
            ) : (
                <PaginationButton txt="goToFirestPage" active={true} action={goToFirestPage} />
            )}
            <div>
                <button
                    onClick={() => goToPage(actualPageIdx - 3)}
                    disabled={actualPageIdx - 3 < 0 ? true : false}
                    // style={actualPageIdx - 3 < 0 ? { display: "none" } : { display: "block" }}
                >{`goTo ${actualPageIdx - 2} Page`}</button>
            </div>
            <div>
                <button
                    onClick={() => goToPage(actualPageIdx - 2)}
                    disabled={actualPageIdx - 2 < 0 ? true : false}
                    // style={actualPageIdx - 2 < 0 ? { display: "none" } : { display: "block" }}
                >{`goTo ${actualPageIdx - 1} Page`}</button>
            </div>

            {actualPageIdx ? (
                <PaginationButton txt="goToPrevPage" action={goToPrevPage} />
            ) : (
                <PaginationButton txt="goToPrevPage" active={true} action={goToPrevPage} />
            )}

            <div>
                <button>{`actualPage ${actualPageIdx + 1}`}</button>
            </div>

            {actualPageIdx === lastPageIdx ? (
                <PaginationButton txt="goToNextPage" active={true} action={goToNextPage} />
            ) : (
                <PaginationButton txt="goToNextPage" action={goToNextPage} />
            )}

            <div>
                <button
                    onClick={() => goToPage(actualPageIdx + 2)}
                    disabled={actualPageIdx + 2 > lastPageIdx ? true : false}
                    // style={actualPageIdx + 2 > lastPageIdx ? { display: "none" } : { display: "block" }}
                >{`goTo ${actualPageIdx + 3} Page`}</button>
            </div>
            <div>
                <button
                    onClick={() => goToPage(actualPageIdx + 3)}
                    disabled={actualPageIdx + 3 > lastPageIdx ? true : false}
                    // style={actualPageIdx + 3 > lastPageIdx ? { display: "none" } : { display: "block" }}
                >{`goTo ${actualPageIdx + 4} Page`}</button>
            </div>

            {actualPageIdx === lastPageIdx ? (
                <PaginationButton txt="goToLastPage" active={true} action={goToLastPage} />
            ) : (
                <PaginationButton txt="goToLastPage" action={goToLastPage} />
            )}
        </div>
    );
};

export default Pagination;
