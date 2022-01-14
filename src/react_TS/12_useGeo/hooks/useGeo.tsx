import { useReducer } from "react";
import { geoDataReducer, geoDataInitialState } from "../reducer/geoDataReducer";
import { ActionType, geoData } from "../App.d";

export const useGeo = (): [geoData, () => void] => {
    const [geoDataState, geoDataDispatch] = useReducer(geoDataReducer, geoDataInitialState);
    const { isToggle } = geoDataState;

    const toggleListening = (): void => {
        console.log(`toggleListening`);
        geoDataDispatch({ type: ActionType.toggleListeningLocation, isToggle: !isToggle });

        const success = (position: any) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            geoDataDispatch({ type: ActionType.changeLocation, latitude, longitude });
        };

        if (isToggle) {
            console.log("isToggle");
            navigator.geolocation.getCurrentPosition(success);
        } else {
            console.log("!isToggle");
            geoDataDispatch({ type: ActionType.resetLocation });
        }
    };

    const geoData = {
        latitude: geoDataState.latitude,
        longitude: geoDataState.longitude,
    };

    return [geoData, toggleListening];
};
