import { geoDataType, ActionType, GeoDataActions } from "../App.d";

export const geoDataInitialState: geoDataType = {
    latitude: 0,
    longitude: 0,
    isToggle: true,
};

export const geoDataReducer = (state: geoDataType, action: GeoDataActions) => {
    switch (action.type) {
        case ActionType.changeLatitude: {
            return {
                ...state,
                latitude: action.location,
            };
        }
        case ActionType.changeLongitude: {
            return {
                ...state,
                longitude: action.location,
            };
        }
        case ActionType.toggleListeningLocation: {
            console.log("toggleReducer");
            console.log(action.isToggle);
            return {
                ...state,
                isToggle: action.isToggle,
            };
        }
        case ActionType.changeLocation: {
            return {
                ...state,
                latitude: action.latitude,
                longitude: action.longitude,
            };
        }
        case ActionType.resetLocation: {
            return {
                latitude: 0,
                longitude: 0,
                isToggle: false,
            };
        }
        default:
            return state;
    }
};
