import { Actions, Action, LangTexts, InitialState } from "./App.d";

export const reducer = (state: InitialState, action: Actions) => {
  const { type, payload } = action;
  switch (type) {
    case Action.setLang:
      return {
        ...state,
        texts: payload,
      };

    default:
      return state;
  }
};

export const initialState: InitialState = {
  texts: {
    attention: {},
    newsletter: {},
  },
};
