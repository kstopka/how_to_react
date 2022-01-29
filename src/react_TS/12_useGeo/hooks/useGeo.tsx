import { useReducer, useRef } from "react";
import { geoDataReducer, geoDataInitialState } from "../reducer/geoDataReducer";
import { ActionType, geoDataType } from "../App.d";

export const useGeo = (): [geoDataType, () => void] => {
    const [{ isToggle, geoData }, geoDataDispatch] = useReducer(geoDataReducer, geoDataInitialState);
    const locationWatchId = useRef(0);

    const success = ({ coords }: GeolocationPosition) => {
        if (!coords) {
            throw new Error("Navigation cannot read the coordinates");
        }
        const { latitude, longitude } = coords;
        geoDataDispatch({ type: ActionType.changeLocation, latitude, longitude });
        if (locationWatchId.current && navigator.geolocation) {
            navigator.geolocation.clearWatch(locationWatchId.current);
        }
    };
    const error = () => {
        throw new Error("Location consent required for application");
    };

    const toggleListening = (): void => {
        if (!navigator.geolocation) {
            // alert("not supported");
            throw new Error("Navigation is not supported");
        }
        if (isToggle) {
            geoDataDispatch({ type: ActionType.toggleListeningLocation, isToggle: false });
            // navigator.geolocation.getCurrentPosition(success);

            //watching przy przemieszczaniu sie
            locationWatchId.current = navigator.geolocation.watchPosition(success, error);
        } else {
            geoDataDispatch({ type: ActionType.resetLocation });
            alert("navigation is turned off");
        }
    };
    return [geoData, toggleListening];
};
