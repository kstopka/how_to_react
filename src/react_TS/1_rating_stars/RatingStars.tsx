import * as React from "react";
import { useState, useEffect, FunctionComponent } from "react";
import RatingList from "./RatingList";
// import dataRatings from "./data.json";
import { RatingType, ObjRatingType } from "./App.d";
// import { useRatingFromApi } from "./App.hooks";

interface AppProps {}

// api.ts
const mockedData = () => new Promise((res, rej)=>{
    if(){
        res(dataRatings.ratings)
    }
    rej({error:true, message:'failed fetch'})
})

// App.hooks.tsx
const useRatingFromApi = () => {
    const [ratings, setRatings] = useState<RatingType[]>(dataRatings.ratings);
    // loading
    // error

    useEffect(() => {
        // loader
        // promise np za 2sec
        // i potem jest nadpisanie stanu (70%success/30%error)
        const data: RatingType[] = dataRatings.ratings;
        setRatings(data);
    });

    return { ratings }
}


const App: FunctionComponent<AppProps> = () => {
    const { ratings, error, loading } = useRatingFromApi()

    return (
        <div className="wrapper">
            <h1>Rating Stars</h1>
            <p></p>
            <RatingList ratings={ratings} />
        </div>
    );
};

export default App;
