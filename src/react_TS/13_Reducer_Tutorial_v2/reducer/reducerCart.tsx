import { IInitialStateCart, ActionTypeCart, ActionsCart } from "../App.d";

export const reducerCart = (state: IInitialStateCart, action: ActionsCart) => {
    switch (action.type) {
        case ActionTypeCart.AdditionToCart: {
            action.cartProduct.quantity = 1;
            return {
                ...state,
                cartProductList: [...state.cartProductList, action.cartProduct],
            };
        }
        case ActionTypeCart.RemoveFromCart: {
            return {
                ...state,
                cartProductList: [...state.cartProductList.filter((item) => item.product.id !== action.id)],
            };
        }
        case ActionTypeCart.ChangeQuantity: {
            const index = state.cartProductList.findIndex((item) => item.product.id === action.id);
            if (action.mode === "addition") {
                state.cartProductList[index].quantity = state.cartProductList[index].quantity + 1;
            } else if (action.mode === "subtraction") {
                state.cartProductList[index].quantity = state.cartProductList[index].quantity - 1;
            }
            return {
                ...state,
                cartProductList: [...state.cartProductList],
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
