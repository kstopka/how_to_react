import { useState } from "react";
import { usePaginationType } from "../App.d";

// generyczny
export const usePagination: usePaginationType = (dataEntries, elementsOnPage = 3) => {
    //NOTE: gdzie umieścić ten setTimeout?
    //TODO: zrobić setTimeout
    //TODO: wyrzucić validacje
    // const idSetTimeout = setTimeout(() => {}, 333);
    // isBusy - boolean true/false, defaultowo false, który jest włączony na 333ms podczas gdy zmieniana jest strona i wyświetlane są nowe dane
    const [actualPageIdx, setActualPageIdx] = useState(10);

    if (isNaN(elementsOnPage) || isNaN(actualPageIdx)) {
        throw new Error("Value cant be NaN");
    }
    if (!Number.isInteger(elementsOnPage) || !Number.isInteger(actualPageIdx)) {
        throw new Error(`Value is not integer`);
    }
    if (actualPageIdx < 0) {
        throw new Error("index can not be negative number");
    }
    const lastPageIdx: number = Math.ceil(dataEntries.length / elementsOnPage) - 1;

    if (actualPageIdx > lastPageIdx) {
        setActualPageIdx(lastPageIdx);
    }

    const [isBusy, setIsBusy] = useState(false);

    const indexToStartSlice: number = actualPageIdx * elementsOnPage;
    const indexToStopSlice: number = indexToStartSlice + elementsOnPage;
    const entriesOnSelectedPage = dataEntries.slice(indexToStartSlice, indexToStopSlice);

    const changeBusy = (value: number) => {
        setIsBusy(true);
        setTimeout(() => {
            setActualPageIdx(value);
            setIsBusy(false);
        }, 333);
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
