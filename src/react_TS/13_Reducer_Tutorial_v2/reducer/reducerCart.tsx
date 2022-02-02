import { IInitialStateCart, ActionTypeCart, ActionsCart } from "../App.d";

export const reducerCart = (state: IInitialStateCart, action: ActionsCart) => {
    const showIndex = (id: string) => state.cartProductList.findIndex((item) => item.product.id === id);
    switch (action.type) {
        case ActionTypeCart.AdditionToCart: {
            return {
                ...state,
                cartProductList: [...state.cartProductList, action.cartProduct],
            };
        }
        case ActionTypeCart.RemoveFromCart: {
            return {
                ...state,
                //NOTE sprawdzić slice
                cartProductList: [...state.cartProductList.filter((item) => item.product.id !== action.id)],
            };
        }
        case ActionTypeCart.ChangeQuantity: {
            const index = showIndex(action.id);
            let quantity: number;
            if (action.mode === "addition") {
                quantity = state.cartProductList[index].quantity + 1;
            } else if (action.mode === "subtraction") {
                quantity = state.cartProductList[index].quantity - 1;
            } else if (action.mode === "start") {
                quantity = 1;
            }
            return {
                ...state,
                cartProductList: state.cartProductList.map((cartProduct, i) =>
                    i === index ? { ...cartProduct, quantity } : cartProduct
                ),
            };
        }
        case ActionTypeCart.ClearCart: {
            return {
                ...state,
                cartProductList: [],
            };
        }
        case ActionTypeCart.ChangeDiscountCode: {
            return {
                ...state,
                discountCode: !state.discountCode,
            };
        }
        case ActionTypeCart.ChangeProductValue: {
            const index = showIndex(action.id);
            const cartProduct = state.cartProductList[index];
            const totalValue = cartProduct.quantity * cartProduct.product.price;
            const discountPercent = (100 - cartProduct.discount) / 100;
            const totalValueWithDiscount = totalValue * discountPercent;
            return {
                ...state,
                cartProductList: state.cartProductList.map((cartProduct, i) =>
                    i === index ? { ...cartProduct, totalValue, totalValueWithDiscount } : cartProduct
                ),
            };
        }
        case ActionTypeCart.ChangeCartValue: {
            const { cartProductList, discountCode, discountCart } = state;
            const discountPercent = (100 - discountCart) / 100;

            let totalCartPrice = cartProductList.reduce(
                (previousValue, currentValue) => previousValue + currentValue.totalValueWithDiscount,
                0
            );

            if (discountCode) {
                totalCartPrice *= discountPercent;
            }

            return { ...state, totalCartPrice };
        }

        default:
            return state;
    }
};

export const initialStateCart: IInitialStateCart = {
    id: "",
    cartProductList: [],
    discountCart: 25,
    discountCode: false,
    totalCartPrice: 0,
};
