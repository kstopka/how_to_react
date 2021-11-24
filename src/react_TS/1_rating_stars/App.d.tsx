export type RatingType = {
    recordId: string;
    name: string;
    score: number;
    content: string;
};

export type InitialStateType = {
    imBusy: boolean;
    ratings: RatingType[];
    errorMessage: string;
    error: boolean;
};
