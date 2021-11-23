import * as React from "react";
import { FunctionComponent, createContext } from "react";

import RatingList from "./components/RatingList";
import { useRatingFromApi } from "./App.hooks";
import { RatingType } from "./App.d";

interface AppProps {}
const RatingsContext = createContext<RatingType[]>([]);

const App: FunctionComponent<AppProps> = () => {
    //TODO: dodac loading w useRatingFromApi

    const { imBusy, ratings, errorMessage, error } = useRatingFromApi();

    return (
        <div className="wrapper">
            <h1>Rating Stars</h1>
            {imBusy ? <p>true</p> : <p>false</p>}
            {error ? errorMessage : <RatingList ratings={ratings} />}
        </div>
    );
};

export default App;
