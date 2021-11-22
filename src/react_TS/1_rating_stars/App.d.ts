export type RatingType = {
    recordId: string;
    name: string;
    score: number;
    content: string;
};

export type ratingsReducerType = {
    imBusy: boolean;
    ratings: RatingType[];
    errorMessage: string;
    error: boolean;
};
