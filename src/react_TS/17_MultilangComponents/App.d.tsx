export interface LangInitialState {
    // [key: string]: {
    //     title: string;
    //     subtitle: string;
    //     ctaButton: string;
    // };
    counter: number;
}

export type LangChangerType = (langs: string) => void;

export type ContextType = {
    state: LangInitialState;
    dispatch: React.Dispatch<any>;
};

export enum Types {
    reset = "reset",
    addition = "addition",
    subtraction = "subtraction",
}
