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

// export type ActionMap<M extends { [index: string]: any }> = {
//     [Key in keyof M]: M[Key] extends undefined
//         ? {
//               type: Key;
//           }
//         : {
//               type: Key;
//               payload: M[Key];
//           };
// };

// export enum Types {
//     SetRatings = "setRatings",
//     SetBusy = "setBusy",
//     SetError = "setError",
// }

// export type RatingsPayload = {
//     [Types.SetRatings]: {
//         // ratings: RatingType[];
//         id: string;
//         name: string;
//         score: number;
//         content: string;
//     };
// };

// export type RatingsActions = ActionMap<RatingsPayload>[keyof ActionMap<RatingsPayload>];

// export type AllRatingsPayload = {
//     [Types.SetBusy]: {
//         imBusy: boolean;
//     };
//     [Types.SetError]: {
//         error: boolean;
//     };
// };

// export type AllRatingsActions = ActionMap<AllRatingsPayload>[keyof ActionMap<AllRatingsPayload>];
