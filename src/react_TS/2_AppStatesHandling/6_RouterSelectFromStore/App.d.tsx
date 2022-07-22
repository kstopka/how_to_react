export interface Fruit {
  id: string;
  name: string;
  price: number;
}

export type TStore = {
  items: Fruit[];
};

export type InitialState = {
  chosenItem: Fruit;
} & TStore;

export enum Action {
  setData,
  setChosenItem,
}

interface SetData {
  type: Action.setData;
  payload: TStore;
}
interface SetChosenItem {
  type: Action.setChosenItem;
  payload: Fruit;
}

export type Actions = SetData | SetChosenItem;

export interface IActions {
  setData: (values: TStore) => void;
  setChosenItem: (values: Fruit) => void;
}
export interface ContextType {
  state: InitialState;
  actions: IActions;
}
