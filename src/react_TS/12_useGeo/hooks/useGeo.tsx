import { useReducer } from "react";
import { geoDataReducer, geoDataInitialState } from "../reducer/geoDataReducer";
import { ActionType, geoDataType } from "../App.d";

export const useGeo = (): [geoDataType, () => void] => {
    const [{ isToggle, geoData }, geoDataDispatch] = useReducer(geoDataReducer, geoDataInitialState);

    const toggleListening = (): void => {
        const success = ({ coords }: GeolocationPosition) => {
            const { latitude, longitude } = coords;
            geoDataDispatch({ type: ActionType.changeLocation, latitude, longitude });
        };

        if (isToggle) {
            geoDataDispatch({ type: ActionType.toggleListeningLocation, isToggle: false });
            //watching przy przemieszczaniu sie
            navigator.geolocation.getCurrentPosition(success);
        } else {
            geoDataDispatch({ type: ActionType.resetLocation });
        }
    };

    return [geoData, toggleListening];
};
