import { Actions, Action, InitialState } from "./App.d";

export const reducer = (state: InitialState, action: Actions) => {
  const { attention, newsletter } = action.payload;
  switch (action.type) {
    case Action.setPolish:
      return {
        ...state,
        attention: attention,
        newsletter: newsletter,
      };
    case Action.setEngilsh:
      return {
        ...state,
        attention: attention,
        newsletter: newsletter,
      };

    default:
      return state;
  }
};

export const initialState: InitialState = {
  attention: {},
  newsletter: {},
};
