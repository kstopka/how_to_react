export type geoDataType = {
    longitude: number;
    latitude: number;
};

export type geoDataStateType = {
    geoData: geoDataType;
    isToggle: boolean;
};

export enum ActionType {
    toggleListeningLocation,
    changeLocation,
    resetLocation,
}

export interface changeLocation {
    type: ActionType.changeLocation;
    latitude: number;
    longitude: number;
}

export interface toggleListeningLocation {
    type: ActionType.toggleListeningLocation;
    isToggle: boolean;
}
export interface resetLocation {
    type: ActionType.resetLocation;
}

export type GeoDataActions = toggleListeningLocation | changeLocation | resetLocation;
