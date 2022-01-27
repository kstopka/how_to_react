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

    const toggleListening = (): void => {
        if (isToggle) {
            geoDataDispatch({ type: ActionType.toggleListeningLocation, isToggle: false });
            // navigator.geolocation.getCurrentPosition(success);

            //watching przy przemieszczaniu sie
            locationWatchId.current = navigator.geolocation.watchPosition(success);
        } else {
            geoDataDispatch({ type: ActionType.resetLocation });
        }
    };
    return [geoData, toggleListening];
};
