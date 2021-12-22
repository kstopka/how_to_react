import { FunctionComponent } from "react";
import { PaginationType } from "../App.d";
import PaginationButton from "./PaginationButton";

interface PaginationProps {
    options: PaginationType;
}
//NOTE: do sprawdzenia

const Pagination: FunctionComponent<PaginationProps> = ({ options }) => {
    const { actualPageIdx, lastPageIdx, goToFirestPage, goToPrevPage, goToPage, goToNextPage, goToLastPage } = options;
    const isActive = (option: string, number: number) => {
        switch (option) {
            case "start":
                return actualPageIdx <= number;
            case "end":
                return actualPageIdx + number >= lastPageIdx;
        }
    };

    const calculateCorrectIndex = (option: string, number: number): number => {
        switch (option) {
            case "start":
                return actualPageIdx - number;
            case "end":
                return actualPageIdx + number;
            default:
                return NaN;
        }
    };

    return (
        <div className="pagination">
            <PaginationButton
                txt="goToFirestPage.............."
                action={goToFirestPage}
                active={isActive("start", 0)}
            />
            {isActive("start", 0) ? null : <button onClick={goToFirestPage}>goToFirestPage</button>}

            <PaginationButton
                txt={`goTo ${calculateCorrectIndex("start", 2)} Page.............`}
                active={isActive("start", 3)}
                // action={goToPage(calculateCorrectIndex("start", 3))}
                // action={goToPage}
            />
            {isActive("start", 3) ? null : (
                <button onClick={() => goToPage(calculateCorrectIndex("start", 3))}>{`goTo ${calculateCorrectIndex(
                    "start",
                    2
                )} Page`}</button>
            )}

            {isActive("start", 2) ? null : (
                <button onClick={() => goToPage(calculateCorrectIndex("start", 2))}>{`goTo ${calculateCorrectIndex(
                    "start",
                    1
                )} Page`}</button>
            )}

            {isActive("start", 1) ? null : <button onClick={goToPrevPage}>goToPrevPage</button>}

            <button style={{ color: "red" }}>{`actualPage ${actualPageIdx + 1}`}</button>

            {isActive("end", 3) ? null : <button onClick={goToNextPage}>goToNextPage</button>}

            {isActive("end", 2) ? null : (
                <button onClick={() => goToPage(calculateCorrectIndex("end", 2))}>{`goTo ${calculateCorrectIndex(
                    "end",
                    3
                )} Page`}</button>
            )}
            {isActive("end", 1) ? null : (
                <button onClick={() => goToPage(calculateCorrectIndex("end", 3))}>{`goTo ${calculateCorrectIndex(
                    "end",
                    4
                )} Page`}</button>
            )}

            {isActive("end", 0) ? null : <button onClick={goToLastPage}>goToLastPage</button>}
        </div>
    );
};

export default Pagination;
