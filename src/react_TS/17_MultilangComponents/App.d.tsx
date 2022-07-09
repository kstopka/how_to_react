type CodeLang = "pl" | "en";
type InitialStateContent = "attention" | "newsletter";

interface JSONlike {
  [key: string]: string;
}

export interface InitialState {
  // [key:string]: JSONlike;
  // [key:InitialStateContent]: JSONlike;
  attention: JSONlike;
  newsletter: JSONlike;
}

// export type LangChangerType = (langs: string) => void;

export enum Action {
  setLang,
}

interface SetLang {
  type: Action.setLang;
  payload: {
    name: string;
    value: JSONlike;
  };
}

export type Actions = SetLang;

export interface ContextType {
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}

export interface IActions {
  setLang: (codeLang: CodeLang, name: InitialStateContent) => void;
}
