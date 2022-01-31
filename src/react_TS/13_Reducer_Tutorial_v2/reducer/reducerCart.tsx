import { IInitialStateCart, ActionTypeCart, ActionsCart } from "../App.d";

export const reducerCart = (state: IInitialStateCart, action: ActionsCart) => {
    switch (action.type) {
        case ActionTypeCart.AdditionToCart: {
            return {
                ...state,
                cartProductList: [...state.cartProductList, action.cartProduct],
            };
        }
        case ActionTypeCart.RemoveFromCart: {
            const productIdToRemove = action.cartProduct.product.id;
            return {
                ...state,
                cartProductList: [...state.cartProductList.filter((item) => item.product.id !== productIdToRemove)],
            };
        }
        default:
            return state;
    }
};

export const initialStateCart: IInitialStateCart = {
    id: "",
    cartProductList: [],
    discountCart: 0,
    discountCode: false,
    totalCartPrice: 0,
};
