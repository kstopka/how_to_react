interface JSONlike {
  [key: string]: string;
}

export interface InitialState {
  attention: JSONlike;
  newsletter: JSONlike;
}

// export type LangChangerType = (langs: string) => void;

export enum Action {
  setPolish,
}

interface SetPolish {
  type: Action.setPolish;
  payload: {
    name: string;
    value: JSONlike;
  };
}

export type Actions = SetPolish;

export interface ContextType {
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}

type PropetiesDataType = "attention" | "newsletter";

export interface IActions {
  setPolish: (payload: PropetiesDataType) => void;
}
