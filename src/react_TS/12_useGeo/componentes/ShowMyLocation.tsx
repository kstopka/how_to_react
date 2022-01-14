import * as React from "react";
import { FunctionComponent } from "react";
import { useGeo } from "../hooks/useGeo";

interface ShowMyLocationProps {}

const ShowMyLocation: FunctionComponent<ShowMyLocationProps> = () => {
    const [geoDataState, toggleListening] = useGeo();

    return (
        <div className="wrapper">
            <p>{geoDataState.latitude}</p>
            <p>{geoDataState.longitude}</p>
            <button onClick={toggleListening}>Listening</button>
        </div>
    );
};

export default ShowMyLocation;
