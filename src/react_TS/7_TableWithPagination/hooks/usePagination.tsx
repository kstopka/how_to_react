import * as React from "react";
import { useState } from "react";

type usePaginationState<T> = {
    actualPageIdx: number;
    lastPageIdx: number;
    entriesOnSelectedPage: T[];
    imBusy: boolean;
};

type usePaginationActions = {
    goToFirestPage: () => void;
    goToPrevPage: () => void;
    goToPage: (page: number) => void;
    goToNextPage: () => void;
    goToLastPage: () => void;
};

type usePaginationReturn<T> = [usePaginationState<T>, usePaginationActions];

type usePaginationType = <T>(dataEntries: T[], elementsOnPage?: number) => usePaginationReturn<T>;

// {
//     actualPageIdx,
//     lastPageIdx,
//     entriesOnSelectedPage,
//     imBusy,
//     goToFirestPage,
//     goToPrevPage,
//     goToPage,
//     goToNextPage,
//     goToLastPage,
// };

// generyczny
export const usePagination: usePaginationType = (dataEntries, elementsOnPage = 3) => {
    //NOTE: gdzie umieścić ten setTimeout?
    //TODO: zrobić setTimeout
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
    const entriesOnSelectedPage = dataEntries.slice(indexToStartSlice, indexToStopSlice);

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
    //NOTE:const [{ actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy }, { goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage }] = usePagination(dataEntries);
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
