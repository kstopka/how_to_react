// type CodeLang = "pl" | "en";
export type InitialStateContent = "attention" | "newsletter";

interface Fruit {
  name: string;
  id: string;
  price: number;
}

//NOTE: jak to usprawnić?
export type InitialState = {
  items: Fruit[];
};

// export enum Action {
//   setLang,
// }

// interface SetLang {
//   type: Action.setLang;
//   payload: {
//     name: string;
//     value: JSONlike;
//   };
// }

// export type Actions = SetLang;

// export interface ContextType {
//   state: InitialState;
//   actions: IActions;
// }

// export interface IActions {
//   setLang: (codeLang: CodeLang, name: InitialStateContent) => void;
// }
