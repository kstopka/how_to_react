// // import * as React from "react";
// import { RatingType, AllRatingsActions, Types, InitialStateType, RatingsActions } from "./App.d";

// export const ratingsReducer = (state: RatingType[], action: RatingsActions | AllRatingsActions) => {
//     switch (action.type) {
//         case Types.SetRatings:
//             return [
//                 ...state,
//                 {
//                     recordId: action.payload.id,
//                     name: action.payload.name,
//                     score: action.payload.score,
//                     content: action.payload.content,
//                 },
//             ];
//         default:
//             return state;
//     }
// };

// export const AllRatingsReducer = (
//     state: { imBusy: boolean; ratings: RatingType[]; errorMessage: string; error: boolean },
//     action: RatingsActions | AllRatingsActions
// ) => {
//     switch (action.type) {
//         case "setBusy":
//             return {
//                 ...state,
//                 imBusy: true,
//             };
//         // case "setError":
//         // return {
//         // ...state,
//         // error: true,
//         // imBusy: true,
//         // };
//     }
// };

// // export const ratingsRecuder = (state: any, action: { type: any; payload: { ratings: any } }) => {
// //     // const { type, results } = action;
// //     // const { results } = state;
// //     switch (action.type) {
// //         case "setBusy": {
// //             return {
// //                 ...state,
// //                 imBusy: true,
// //             };
// //         }
// //         case "error": {
// //             return {
// //                 ...state,
// //                 errorMessage: "failed fetch",
// //                 error: true,
// //             };
// //         }
// //         case "setRatings": {
// //             return [
// //                 ...state,
// //                 {
// //                     ratings: action.payload.ratings,
// //                 },
// //             ];
// //         }
// //     }
// // };
