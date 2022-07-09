type CodeLang = "pl" | "en";
export type InitialStateContent = "attention" | "newsletter";

interface JSONlike {
  [key: string]: string;
}

//NOTE: jak to usprawnić?
export type InitialState = {
  [key in InitialStateContent]: JSONlike;
} & {
  attention: JSONlike;
  newsletter: JSONlike;
};

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
  // dispatch: React.Dispatch<Actions>;
  actions: IActions;
}

export interface IActions {
  setLang: (codeLang: CodeLang, name: InitialStateContent) => void;
}
