export interface Fruit {
  name: string;
  id: string;
  price: number;
}

export type InitialState = {
  items: Fruit[];
};

export enum Action {
  setData,
}

interface SetData {
  type: Action.setData;
  payload: InitialState;
}

export type Actions = SetData;

export interface IActions {
  setData: (values: InitialState) => void;
}
export interface ContextType {
  state: InitialState;
  actions: IActions;
}
