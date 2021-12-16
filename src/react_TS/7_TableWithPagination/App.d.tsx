export type usePaginationState<T> = {
    actualPageIdx: number;
    lastPageIdx: number;
    entriesOnSelectedPage: T[];
    isBusy: boolean;
};

export type usePaginationActions = {
    goToFirestPage: () => void;
    goToPrevPage: () => void;
    goToPage: (page: number) => void;
    goToNextPage: () => void;
    goToLastPage: () => void;
};

export type usePaginationReturn<T> = [usePaginationState<T>, usePaginationActions];

export type usePaginationType = <T>(dataEntries: T[], elementsOnPage?: number) => usePaginationReturn<T>;
