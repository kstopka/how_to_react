// import * as React from "react";
// import { createContext, useEffect, useReducer } from "react";
// import { AllRatingsActions, InitialStateType, RatingType, Types } from "./App.d";
// // import { initialState, mainReducer } from "./hooks/useRatingFromApi copy";
// import { ratingsReducer, AllRatingsReducer } from "./reducers";
// import mockedData from "./components/fakeApi";

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

// export const AppContext = createContext<{
//     state: InitialStateType;
//     dispatch: React.Dispatch<any>;
// }>({
//     state: initialState,
//     dispatch: () => null,
// });

// const mainReducer = (
//     {
//         imBusy,
//         ratings,
//         errorMessage,
//         error,
//     }: { imBusy: boolean; ratings: RatingType[]; errorMessage: string; error: boolean },
//     action:
//         | { type: Types.SetRatings; payload: { id: string; name: string; score: number; content: string } }
//         | AllRatingsActions
// ) => ({
//     imBusy: AllRatingsReducer(imBusy, action),
//     ratings: ratingsReducer(ratings, action),
//     errorMessage: AllRatingsReducer(errorMessage, action),
//     error: AllRatingsReducer(error, action),
// });

// export const AppProvider = () => {
//     const [state, dispatch] = useReducer(mainReducer, initialState);
//     const { imBusy, ratings, errorMessage, error } = state;
//     useEffect(() => {
//         const asyncWrapper = async () => {
//             try {
//                 const placeholderData: RatingType[] = await mockedData(true); // powinien być czasownik w akcji
//                 console.log(placeholderData);
//                 // dispatch("setBusy");
//                 // dispatch("setRatings", { placeholderData });
//             } catch ({ message, duringError }) {}
//         };

//         if (!imBusy) {
//             asyncWrapper();
//         }
//     });

//     return { imBusy, ratings, errorMessage, error };
// };
