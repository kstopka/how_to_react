import { useReducer } from "react";
import { geoDataReducer, geoDataInitialState } from "../reducer/geoDataReducer";
import { ActionType, geoDataType } from "../App.d";

export const useGeo = (): [geoDataType, () => void] => {
    const [geoDataState, geoDataDispatch] = useReducer(geoDataReducer, geoDataInitialState);
    const { isToggle, geoData } = geoDataState;

    const toggleListening = (): void => {
        const success = (position: GeolocationPosition) => {
            console.log(position);
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            geoDataDispatch({ type: ActionType.changeLocation, latitude, longitude });
        };

        if (isToggle) {
            geoDataDispatch({ type: ActionType.toggleListeningLocation, isToggle: false });
            navigator.geolocation.getCurrentPosition(success);
        } else {
            geoDataDispatch({ type: ActionType.resetLocation });
        }
    };

    return [geoData, toggleListening];
};
