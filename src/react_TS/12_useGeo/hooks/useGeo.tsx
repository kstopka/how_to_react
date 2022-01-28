import { useReducer, useRef } from "react";
import { geoDataReducer, geoDataInitialState } from "../reducer/geoDataReducer";
import { ActionType, geoDataType } from "../App.d";

export const useGeo = (): [geoDataType, () => void] => {
    const [{ isToggle, geoData }, geoDataDispatch] = useReducer(geoDataReducer, geoDataInitialState);
    const locationWatchId = useRef(0);

    const success = ({ coords }: GeolocationPosition) => {
        const { latitude, longitude } = coords;
        geoDataDispatch({ type: ActionType.changeLocation, latitude, longitude });
        if (locationWatchId.current && navigator.geolocation) {
            navigator.geolocation.clearWatch(locationWatchId.current);
        }
    };
    const error = () => {
        return { error: "you must accept the location to use the application" };
    };

    const toggleListening = (): void => {
        if (!navigator.geolocation) {
            // alert("not supported");
            throw new Error("not supported");
        }
        if (isToggle) {
            geoDataDispatch({ type: ActionType.toggleListeningLocation, isToggle: false });
            // navigator.geolocation.getCurrentPosition(success);

            //watching przy przemieszczaniu sie
            locationWatchId.current = navigator.geolocation.watchPosition(success, error);
        } else {
            geoDataDispatch({ type: ActionType.resetLocation });
        }
    };
    return [geoData, toggleListening];
};
