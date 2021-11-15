import * as React from "react";
import { FunctionComponent } from "react";
import RatingList from "./RatingList";
// import { RatingType, ObjRatingType } from "./App.d";
import { useRatingFromApi } from "./fakeApi";
// import { useRatingFromApi } from "./App.hooks";

interface AppProps {}

// api.ts
//TODO: napisać app hook gdzie importowane są wszystkie hooki a tutaj jest odniesnie do nich
// App.hooks.tsx

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
