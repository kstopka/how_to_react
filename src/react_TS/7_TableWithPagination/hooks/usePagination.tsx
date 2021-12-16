import { SetStateAction, useState } from "react";
import { usePaginationType } from "../App.d";
import { validation } from "../validation";

// generyczny
export const usePagination: usePaginationType = (dataEntries, elementsOnPage = 3) => {
    const [actualPageIdx, setActualPageIdx] = useState(0);

    validation(elementsOnPage, actualPageIdx);

    const lastPageIdx: number = Math.ceil(dataEntries.length / elementsOnPage) - 1;

    if (actualPageIdx > lastPageIdx) {
        setActualPageIdx(lastPageIdx);
    }

    const [isBusy, setIsBusy] = useState(false);

    const indexToStartSlice: number = actualPageIdx * elementsOnPage;
    const indexToStopSlice: number = indexToStartSlice + elementsOnPage;
    const entriesOnSelectedPage = dataEntries.slice(indexToStartSlice, indexToStopSlice);

    const changeBusy = (value: SetStateAction<number>, delay = 100) => {
        setIsBusy(true);
        setTimeout(() => {
            setActualPageIdx(value);
            setIsBusy(false);
        }, delay);
        //NOTE: robić clear?
    };

    const goToFirestPage = () => {
        changeBusy(0);
    };
    const goToPrevPage = () => {
        changeBusy(actualPageIdx - 1);
    };
    const goToPage = (page: number) => {
        changeBusy(page);
    };

    const goToNextPage = () => {
        changeBusy(actualPageIdx + 1);
    };
    const goToLastPage = () => {
        changeBusy(lastPageIdx);
    };

    return [
        { actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
        { goToFirestPage, goToPrevPage, goToPage, goToNextPage, goToLastPage },
    ];
};
