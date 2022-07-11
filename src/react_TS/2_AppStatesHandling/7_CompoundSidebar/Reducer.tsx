import { Action, Actions, InitialState } from "./App.d";

export const reducer = (state: InitialState, action: Actions) => {
  const { type, payload } = action;
  switch (type) {
    case Action.setData:
      return {
        ...state,
        items: payload.items,
      };

    default:
      return state;
  }
};

export const initialState: InitialState = {
  items: [],
};
