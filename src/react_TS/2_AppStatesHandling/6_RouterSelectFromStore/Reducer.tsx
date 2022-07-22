import { Action, Actions, Fruit, InitialState } from "./App.d";

export const reducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case Action.setData:
      return {
        ...state,
        items: action.payload.items,
      };

    case Action.setChosenItem:
      return {
        ...state,
        chosenItem: action.payload,
      };

    default:
      return state;
  }
};

export const initialState: InitialState = {
  items: [],
  chosenItem: {
    id: "",
    name: "",
    price: 0,
  },
};
