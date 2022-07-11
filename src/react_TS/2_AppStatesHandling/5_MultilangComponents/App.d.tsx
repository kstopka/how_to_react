type CodeLang = "pl" | "en";
export type InitialStateContent = "attention" | "newsletter";

interface JSONlike {
  [key: string]: string;
}

//NOTE: jak to usprawnić?
export type LangTexts = {
  [key in InitialStateContent]: JSONlike;
};

export type InitialState = {
  texts: LangTexts;
};

export enum Action {
  setLang,
}

interface SetLang {
  type: Action.setLang;
  payload: LangTexts;
}

export type Actions = SetLang;

export interface ContextType {
  state: InitialState;
  actions: IActions;
}

export interface IActions {
  setLang: (codeLang: CodeLang) => void;
}
