import * as React from "react";
import { FunctionComponent, useState, useEffect } from "react";

interface GeoFindMeProps {}

const GeoFindMe: FunctionComponent<GeoFindMeProps> = () => {
    const [status, setStatus] = useState("");
    const [hrefLink, setHrefLink] = useState("");
    const [txtLink, setTxtLink] = useState("");

    const success = (position: any) => {
        const latitude = position.coords.latitude;

        const longitude = position.coords.longitude;

        setStatus("");
        setHrefLink(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
        setTxtLink(`Latitude: ${latitude}°, Longitude: ${longitude}°`);
    };

    const error = () => {
        setStatus("Unable to retrieve your location");
    };

    const handleClick = () => {
        if (!navigator.geolocation) {
            setStatus("Geolocation is not supported by your browser");
        } else {
            setStatus("Locating…");
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };

    useEffect(() => {}, []);

    return (
        <div>
            <button id="find-me" onClick={handleClick}>
                Show my location
            </button>
            <br />
            <p>{status}</p>
            <a id="map-link" target="_blank" href={hrefLink} rel="noreferrer">
                {txtLink}
            </a>
        </div>
    );
};

export default GeoFindMe;
