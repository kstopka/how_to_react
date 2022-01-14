export type geoDataType = {
    longitude: number;
    latitude: number;
    isToggle: boolean;
};

export type geoData = {
    longitude: number;
    latitude: number;
};

export enum ActionType {
    changeLatitude,
    changeLongitude,
    toggleListeningLocation,
    changeLocation,
    resetLocation,
}

export interface changeLatitude {
    type: ActionType.changeLatitude;
    location: number;
}
export interface changeLongitude {
    type: ActionType.changeLongitude;
    location: number;
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

export type GeoDataActions =
    | changeLatitude
    | changeLongitude
    | toggleListeningLocation
    | changeLocation
    | resetLocation;
