import { ActionsCart, ActionType, IInitialStateCart } from "../App.d";

export const reducerCart = (state: IInitialStateCart, action: ActionsCart) => {
    switch (action.type) {
        case ActionType.ProductFromAPI: {
            return { ...state, cartProductList: action.payload.cartProductList };
        }
        case ActionType.AdditionProduct: {
            console.log(action.payload.index);
            // const quantityToChange = state.cartProductList[action.payload.index].quantity
            state.cartProductList[action.payload.index].quantity += 1000;
            console.log(state.cartProductList[action.payload.index].quantity);
            return {
                ...state,
                cartProductList: [...state.cartProductList],
            };
        }
        case ActionType.SubtractionProduct: {
            return { ...state };
        }
        case ActionType.SubtractionAllProduct: {
            return { ...state };
        }
        case ActionType.SubmitCart: {
            return { ...state };
        }
        default:
            return state;
    }
};

export const initialStateCart: IInitialStateCart = {
    cartProductList: [],
};
