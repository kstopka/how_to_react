import { ActionsCart, ActionType, IInitialStateCart } from "../App.d";

export const reducerCart = (state: IInitialStateCart, action: ActionsCart) => {
    switch (action.type) {
        case ActionType.ProductFromAPI: {
            return { ...state, cartProductList: action.cartProductList };
        }
        case ActionType.AdditionProduct: {
            const { cartProductList } = state;
            const { index } = action;
            cartProductList[index].quantity = cartProductList[index].quantity + 0.5;

            return {
                ...state,
                // cartProductList: [...cartProductList],
            };
        }
        case ActionType.SubtractionProduct: {
            const { cartProductList } = state;
            const { index } = action;
            const quantityToChange = cartProductList[index].quantity;
            if (quantityToChange === 0) return state;

            cartProductList[index].quantity = quantityToChange - 0.5;

            if (quantityToChange < 0) {
                cartProductList[index].quantity = 0;
                return state;
            }
            return { ...state };
        }
        case ActionType.SubtractionAllProduct: {
            const { cartProductList } = state;
            const { index } = action;
            if (cartProductList[index].quantity <= 0) return state;
            cartProductList[index].quantity = 0;

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
