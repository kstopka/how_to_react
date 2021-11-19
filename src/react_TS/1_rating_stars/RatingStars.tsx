import * as React from "react";
import { FunctionComponent } from "react";
import RatingList from "./components/RatingList";
import { useRatingFromApi } from "./App.hooks";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    //TODO: dodac loading w useRatingFromApi

    const { ratings, errorMessage, error } = useRatingFromApi();

    return (
        <div className="wrapper">
            <h1>Rating Stars</h1>
            <p></p>
            {error ? errorMessage : <RatingList ratings={ratings} />}
        </div>
    );
};

export default App;
