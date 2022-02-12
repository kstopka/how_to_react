export interface State {
    text: string;
    number: number;
}

export enum ActionType {
    changeText,
}

export interface changeText {
    type: ActionType.changeText;
    payload: string;
}

export type Actions = changeText;
