import { Actions, Action, InitialState } from "./App.d";

export const reducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case Action.setLang:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };

    default:
      return state;
  }
};

export const initialState: InitialState = {
  attention: {},
  newsletter: {},
};
