import * as React from "react";
import { FunctionComponent } from "react";
import { useGeo } from "../hooks/useGeo";

interface ShowMyLocationProps {}

const ShowMyLocation: FunctionComponent<ShowMyLocationProps> = () => {
    const [{ latitude, longitude }, toggleListening] = useGeo();

    return (
        <div className="wrapper">
            <p>{latitude}</p>
            <p>{longitude}</p>
            <button onClick={toggleListening}>Listening</button>
        </div>
    );
};

export default ShowMyLocation;
