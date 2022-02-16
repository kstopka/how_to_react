export interface InitialState {
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

export interface IContextInitialCtx {
    state: InitialState;
    actions: IActions;
}

export interface IActions {
    changeText: (payload: string) => void;
    resetText: () => void;
}
export type ActionsType = "changeText" | "resetText";
export type StateType = "text" | "number";

export interface IContextInitialCart {
    state: InitialState;
    actions: IActions;
}
