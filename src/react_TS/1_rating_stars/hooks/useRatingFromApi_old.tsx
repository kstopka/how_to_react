// import { result } from "lodash";
// import { useState, useEffect, Dispatch, SetStateAction, useReducer } from "react";
// import { RatingType, InitialStateType, Action } from "../App.d";
// import mockedData from "../components/fakeApi";

// // setForBusy(boolean)
// // setForError({duringError, message})

// // const promiseWrapperExample = () => new Promise(() => {});

// // const asyncWrapperForPromiseWithConnectedState = async (
// //     promiseWrapper: { (): Promise<RatingType[]>; (): any },
// //     {
// //         setForBusy,
// //         setForError,
// //         setForResponse,
// //     }: {
// //         setForBusy: Dispatch<SetStateAction<boolean>>;
// //         setForError: Dispatch<SetStateAction<boolean>>;
// //         setForResponse: Dispatch<SetStateAction<RatingType[]>>;
// //     }
// // ) => {
// //     try {
// //         setForBusy(true);
// //         const placeholderData = await promiseWrapper(); // powinien być czasownik w akcji
// //         setForResponse(placeholderData);
// //         setForBusy(false);
// //     } catch ({ message, duringError }) {
// //         setForError(false);
// //         setForBusy(false);
// //     }
// // };

// // const asyncWrapperForPromiseWithConnectedState = async (
// //     promiseWrapper: { (): Promise<RatingType[]>; (): any },
// //     {
// //         setForBusy,
// //         setForError,
// //         setForResponse,
// //     }: {
// //         setForBusy: Dispatch<SetStateAction<boolean>>;
// //         setForError: Dispatch<SetStateAction<boolean>>;
// //         setForResponse: Dispatch<SetStateAction<RatingType[]>>;
// //     }
// // ) => {
// //     try {
// //         setForBusy(true);
// //         const placeholderData = await promiseWrapper(); // powinien być czasownik w akcji
// //         setForResponse(placeholderData);
// //     } catch ({ message, duringError }) {
// //         setForError(false);
// //     }
// // };

// // React.Context
// // useReducer / useContext
// // reducer do array i obj

// const ratingsRecuder = (state: any, action: { type: any }) => {
//     // const { type, results } = action;
//     const { results } = state;
//     switch (action.type) {
//         case "setBusy": {
//             return {
//                 ...state,
//                 imBusy: true,
//             };
//         }
//         case "error": {
//             return {
//                 ...state,
//                 errorMessage: "failed fetch",
//                 error: true,
//             };
//         }
//         case "success": {
//             return {
//                 ...state,
//                 ratings: results,
//                 imBusy: false,
//             };
//         }
//     }
// };

// const initialState: InitialStateType = {
//     imBusy: false,
//     ratings: [
//         {
//             recordId: "",
//             name: "",
//             score: 0,
//             content: "",
//         },
//     ],
//     errorMessage: "",
//     error: false,
// };

// export const useRatingFromApi = () => {
//     const [state, dispatch] = useReducer(ratingsRecuder, initialState);
//     const { imBusy, ratings, errorMessage, error } = state;
//     //widok \/
//     const Loading = () => (
//         <div>
//             <h1>please wait 2 seconds</h1>
//         </div>
//     );

//     useEffect(() => {
//         // 1 poziom ogólnosci
//         //implementacja:
//         const asyncWrapper = async () => {
//             try {
//                 const placeholderData: RatingType[] = await mockedData(true); // powinien być czasownik w akcji
//                 dispatch({ type: "setBusy" });
//                 dispatch({ type: "setRatings", results: placeholderData });
//             } catch ({ message, duringError }) {
//                 dispatch({ type: "error" });
//             }
//         };

//         // const asyncWrapper = async () => {
//         //     try {
//         //         setBusy(true);
//         //         const placeholderData = await mockedData(true); // powinien być czasownik w akcji
//         //         setRatings(placeholderData);
//         //         setBusy(false);
//         //     } catch ({ message, duringError }) {
//         //         setErrorMessage("failed fetch"); //message
//         //         setError(true); //duringError
//         //         setBusy(false);
//         //     }
//         // };
//         // if (!imBusy) {
//         //     asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
//         //         setForBusy: setBusy,
//         //         setForError: setError,
//         //         setForResponse: setRatings,
//         //     });
//         // }
//         // wyższy poziom abstrakcji - prostsza
//         if (!imBusy) {
//             asyncWrapper();
//         }
//     });
//     return { imBusy, ratings, errorMessage, error };
// };
