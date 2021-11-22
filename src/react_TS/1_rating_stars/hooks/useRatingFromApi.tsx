import { useState, useEffect } from "react";
import { RatingType } from "../App";
import mockedData from "../components/fakeApi";

// // setForBusy(boolean)
// // setForError({duringError, message})

// const promiseWrapperExample = () => new Promise(() => {});

// const asyncWrapperForPromiseWithConnectedState = async (
//     promiseWrapper,
//     { setForBusy, setForError, setForResponse }
// ) => {
//     try {
//         setForBusy(true);
//         const placeholderData = await promiseWrapper(); // powinien być czasownik w akcji
//         setForResponse(placeholderData);
//         setForBusy(false);
//     } catch ({ message, duringError }) {
//         setForError(message);
//         setForBusy(false);
//     }
// };

// const asyncWrapperForPromiseWithConnectedState = async (
//     promiseWrapper,
//     { setForBusy, setForError, setForResponse }
// ) => {
//     try {
//         setForBusy(true);
//         const placeholderData = await promiseWrapper(); // powinien być czasownik w akcji
//         setForResponse(placeholderData);
//     } catch ({ message, duringError }) {
//         setForError(message);
//     }
// };

// // React.Context
// // useReducer / useContext
// // reducer do array i obj
export const useRatingFromApi = () => {
    //     const [imBusy, setBusy] = useState<boolean>(false);
    const [ratings, setRatings] = useState<RatingType[]>([
        {
            recordId: "",
            name: "",
            score: 0,
            content: "",
        },
    ]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [error, seterror] = useState<boolean>(false);
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
    //                 setBusy(true);
    //                 const placeholderData = await mockedData(true); // powinien być czasownik w akcji

    //                 setRatings(placeholderData);
    //                 setBusy(false);
    //             } catch ({ message, duringError }) {
    //                 setErrorMessage(message);
    //                 seterror(duringError);
    //                 setBusy(false);
    //             }
    //         };

    //         if (!imBusy) {
    //             asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
    //                 setForBusy: setBusy,
    //                 setForError: setError,
    //                 setForResponse: setRatings,
    //             });
    //         }

    //         // wyższy poziom abstrakcji - prostsza
    //         if (!imBusy) {
    //             asyncWrapper();
    //         }
    //     });

    return { ratings, errorMessage, error };
    // return { imBusy, ratings, errorMessage, error };
};
