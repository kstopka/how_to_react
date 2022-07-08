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
  setEngilsh,
}

interface SetPolish {
  type: Action.setPolish;
  payload: { attention: JSONlike; newsletter: JSONlike };
}
interface SetEnglish {
  type: Action.setEngilsh;
  payload: { attention: JSONlike; newsletter: JSONlike };
}

export type Actions = SetPolish | SetEnglish;

export interface ContextType {
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}
