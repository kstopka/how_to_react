import { FunctionComponent } from "react";
import { PaginationType } from "../App.d";

interface PaginationProps {
    options: PaginationType;
}

const Pagination: FunctionComponent<PaginationProps> = ({ options }) => {
    const { actualPageIdx, lastPageIdx, goToFirestPage, goToPrevPage, goToPage, goToNextPage, goToLastPage } = options;

    const isEnd = () => actualPageIdx === lastPageIdx;

    return (
        <div className="pagination">
            <button
                //NOTE: disabled czy style: display = none???/
                disabled={actualPageIdx <= 0}
                style={actualPageIdx <= 0 ? { display: "none" } : {}}
                onClick={goToFirestPage}
            >
                goToFirestPage
            </button>

            <button disabled={actualPageIdx - 3 < 0} onClick={() => goToPage(actualPageIdx - 3)}>
                {`goTo ${actualPageIdx - 2} Page`}
            </button>

            <button disabled={actualPageIdx - 2 < 0} onClick={() => goToPage(actualPageIdx - 2)}>
                {`goTo ${actualPageIdx - 1} Page`}
            </button>

            <button disabled={actualPageIdx <= 0} onClick={goToPrevPage}>
                goToPrevPage
            </button>

            <button style={{ color: "red" }}>{`actualPage ${actualPageIdx + 1}`}</button>
            <button disabled={isEnd()} onClick={goToNextPage}>
                goToNextPage
            </button>

            <button onClick={() => goToPage(actualPageIdx + 2)} disabled={actualPageIdx + 2 > lastPageIdx}>
                {`goTo ${actualPageIdx + 3} Page`}
            </button>
            <button onClick={() => goToPage(actualPageIdx + 3)} disabled={actualPageIdx + 3 > lastPageIdx}>
                {`goTo ${actualPageIdx + 4} Page`}
            </button>
            <button disabled={isEnd} onClick={goToLastPage}>
                goToLastPage
            </button>
        </div>
    );
};

export default Pagination;
