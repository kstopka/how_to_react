import { ActionsProduct, ActionTypeProduct, IInitialStateProduct } from "../App.d";

export const reducerProduct = (state: IInitialStateProduct, action: ActionsProduct) => {
    switch (action.type) {
        case ActionTypeProduct.ProductFromAPI: {
            return { ...state, cartProductList: action.cartProductList };
        }
        case ActionTypeProduct.AdditionProduct: {
            const { cartProductList } = state;
            const { index } = action;
            cartProductList[index].quantity = cartProductList[index].quantity + 0.5;

            return {
                ...state,
                // cartProductList: [...cartProductList],
            };
        }
        case ActionTypeProduct.SubtractionProduct: {
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
        case ActionTypeProduct.SubtractionAllProduct: {
            const { cartProductList } = state;
            const { index } = action;
            if (cartProductList[index].quantity <= 0) return state;
            cartProductList[index].quantity = 0;

            return { ...state };
        }
        case ActionTypeProduct.SubmitCart: {
            return { ...state };
        }
        default:
            return state;
    }
};

export const initialStateProduct: IInitialStateProduct = {
    cartProductList: [],
};
