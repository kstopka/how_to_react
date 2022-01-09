export type validationType = {
    [key: string]: (name: string, value: string) => { isError: boolean; errorMessage: string };
};

export type DataItemType = {
    value: string;
    error: boolean;
    errorMessage: string;
};

export type DataType = {
    [key: string]: DataItemType;
};

export type InitialStateType = {
    data: DataType;
    visibleStep: number;
};

export type DataContextType = {
    state: InitialStateType;
    dispatch: React.Dispatch<VisibleStepActions | DataActions>;
};

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

export enum Types {
    setValue = "setValue",
    setError = "setError",
    addition = "addition",
    subtraction = "subtraction",
}

type DataPayload = {
    [Types.setValue]: {
        name: string;
        value: string;
    };
    [Types.setError]: {
        name: string;
        value: string;
    };
};

type VisibleStepPayload = {
    [Types.addition]: undefined;
    [Types.subtraction]: undefined;
};

type DataActions = ActionMap<DataPayload>[keyof ActionMap<DataPayload>];
type VisibleStepActions = ActionMap<VisibleStepPayload>[keyof ActionMap<VisibleStepPayload>];

export type MainActions = DataActions | VisibleStepActions;
