import { ActionsProducts, ActionTypeProducts, IInitialStateProducts } from "../App.d";

export const reducerProducts = (state: IInitialStateProducts, action: ActionsProducts) => {
    const showIndex = (id: string) => state.cartProductList.findIndex((item) => item.product.id === id);
    switch (action.type) {
        case ActionTypeProducts.ProductFromAPI: {
            return { ...state, cartProductList: action.cartProductList };
        }
        case ActionTypeProducts.ChangeProductQuantity: {
            const index = showIndex(action.id);
            const cartQuantity = action.quantity;
            const dataQuantity = state.cartProductList[index].quantity;
            const quantity = dataQuantity - cartQuantity;

            return {
                ...state,
                cartProductList: state.cartProductList.map((cartProduct, i) =>
                    i === index ? { ...cartProduct, quantity } : cartProduct
                ),
            };
        }

        default:
            return state;
    }
};

export const initialStateProducts: IInitialStateProducts = {
    cartProductList: [],
};
