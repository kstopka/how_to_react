export type geoDataType = {
    longitude: number | null;
    latitude: number | null;
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
    latitude: number | null;
    longitude: number | null;
}

export interface toggleListeningLocation {
    type: ActionType.toggleListeningLocation;
    isToggle: boolean;
}
export interface resetLocation {
    type: ActionType.resetLocation;
}

export type GeoDataActions = toggleListeningLocation | changeLocation | resetLocation;
