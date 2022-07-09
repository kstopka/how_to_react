import { geoDataStateType, ActionType, GeoDataActions } from "../App.d";

export const geoDataInitialState: geoDataStateType = {
    geoData: {
        latitude: null,
        longitude: null,
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
                    latitude: null,
                    longitude: null,
                },
                isToggle: true,
            };
        }
        default:
            return state;
    }
};
