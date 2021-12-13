import * as React from "react";
import { useState } from "react";

type usePaginationType = (
    dataEntries: number[],
    elementsOnPage?: number
) => {
    actualPageIdx: number;
    lastPageIdx: number;
    entriesOnSelectedPage: number[];
    imBusy: boolean;

    goToFirestPage: void;
    goToPrevPage: void;
    goToPage: void;
    goToNextPage: void;
    goToLastPage: void;
};

export const usePagination = (dataEntries: number[], elementsOnPage = 3) => {
    //TODO:
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
        console.log(actualPageIdx);
        setActualPageIdx(lastPageIdx);
    }
    const imBusy: boolean = false;
    const indexToStartSlice: number = actualPageIdx * elementsOnPage;
    const indexToStopSlice: number = indexToStartSlice + elementsOnPage;
    const entriesOnSelectedPage: Array<number> = dataEntries.slice(indexToStartSlice, indexToStopSlice);

    const goToFirestPage = () => {
        setActualPageIdx(0);
    };
    const goToPrevPage = () => {
        setActualPageIdx(actualPageIdx - 1);
    };
    const goToPage = (e: { preventDefault: () => void; target: { value: number } }) => {
        e.preventDefault();
        const { value } = e.target;
        setActualPageIdx(value - 1);
    };
    const goToNextPage = () => {
        setActualPageIdx(actualPageIdx + 1);
    };
    const goToLastPage = () => {
        setActualPageIdx(lastPageIdx);
    };

    return {
        actualPageIdx,
        lastPageIdx,
        entriesOnSelectedPage,
        imBusy,
        goToFirestPage,
        goToPrevPage,
        goToPage,
        goToNextPage,
        goToLastPage,
    };
};
