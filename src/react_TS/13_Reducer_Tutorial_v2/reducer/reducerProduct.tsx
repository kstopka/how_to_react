import { ActionsProduct, ActionTypeProduct, IInitialStateProduct } from "../App.d";

export const reducerProduct = (state: IInitialStateProduct, action: ActionsProduct) => {
    const showIndex = (id: string) => state.cartProductList.findIndex((item) => item.product.id === id);
    switch (action.type) {
        case ActionTypeProduct.ProductFromAPI: {
            return { ...state, cartProductList: action.cartProductList };
        }
        case ActionTypeProduct.ChangeProductQuantity: {
            const index = showIndex(action.id);
            const cartQuantity = action.quantity;
            const dataQuantity = state.cartProductList[index].quantity;
            if (cartQuantity > dataQuantity) {
                throw new Error("The value is too high, you cant't buy that much");
            }
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

export const initialStateProduct: IInitialStateProduct = {
    cartProductList: [],
};
