import { geoDataStateType, ActionType, GeoDataActions } from "../App.d";

export const geoDataInitialState: geoDataStateType = {
    geoData: {
        latitude: 0,
        longitude: 0,
    },
    isToggle: true,
};

export const geoDataReducer = (state: geoDataStateType, action: GeoDataActions) => {
    switch (action.type) {
        case ActionType.toggleListeningLocation: {
            return {
                ...state,
                isToggle: action.isToggle,
            };
        }
        case ActionType.changeLocation: {
            return {
                ...state,
                geoData: {
                    latitude: action.latitude,
                    longitude: action.longitude,
                },
            };
        }
        case ActionType.resetLocation: {
            return {
                geoData: {
                    latitude: 0,
                    longitude: 0,
                },
                isToggle: true,
            };
        }
        default:
            return state;
    }
};
