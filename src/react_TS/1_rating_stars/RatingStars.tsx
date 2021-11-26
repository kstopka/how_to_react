import * as React from "react";
import { FunctionComponent, createContext, useEffect } from "react";

import RatingList from "./components/RatingList";
import { useRatingFromApi } from "./App.hooks";
import { RatingType } from "./App.d";
import { Loading } from "./components/Loading";

interface AppProps {}
const RatingsContext = createContext<RatingType[]>([]);

const App: FunctionComponent<AppProps> = () => {
    //TODO: w wolnej chwili dodać context i poprawić loading

    const { imBusy, ratings, errorMessage, error } = useRatingFromApi();
    useEffect(() => {
        console.log(imBusy);
    });

    return (
        <div className="wrapper">
            <h1>Rating Stars</h1>
            <Loading status={imBusy} />
            {error ? errorMessage : <RatingList ratings={ratings} />}
        </div>
    );
};

export default App;
