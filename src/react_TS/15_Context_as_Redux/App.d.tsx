export interface State {
    text: string;
    number: number;
}

export enum ActionType {
    changeText,
    resetText,
}

export interface changeText {
    type: ActionType.changeText;
    payload: string;
}
export interface resetText {
    type: ActionType.resetText;
}

export type Actions = changeText | resetText;

export interface IActions {
    changeText: (state: State, action: changeText) => void;
    resetText: (state: State) => void;
}
export type currOfActions = "changeText" | "resetText";
