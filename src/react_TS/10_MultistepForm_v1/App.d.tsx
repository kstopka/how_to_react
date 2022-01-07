//NOTE taki typ, ok?
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

export type DataActions = ActionMap<DataPayload>[keyof ActionMap<DataPayload>];
export type VisibleStepActions = ActionMap<VisibleStepPayload>[keyof ActionMap<VisibleStepPayload>];
