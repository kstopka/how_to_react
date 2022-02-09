import { IInitialStateCart, ActionTypeCart, ActionsCart } from "../App.d";
import { Validator } from "../Validator";

const actionOnQty = {
    addition: 1,
    subtraction: -1,
    start: 0,
};

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
                //filter robi kopie
                cartProductList: [...state.cartProductList.filter((item) => item.product.id !== action.id)],
            };
        }
        case ActionTypeCart.ChangeQuantity: {
            const { mode, id } = action;
            const index = showIndex(id);
            const quantityToChange = state.cartProductList[index].quantity;

            let quantity: number;
            if (actionOnQty[mode] === 0) {
                quantity = 1;
            } else {
                quantity = quantityToChange + actionOnQty[mode];
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
            const { product, quantity, discount } = cartProduct;
            Validator.throwErrorIfLessThanZero(product.price, "price");
            const totalValue = quantity * product.price;
            Validator.throwErrorIfGreaterThanOneHundred(discount, "discount");

            const discountPercent = (100 - discount) / 100;
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

            Validator.throwErrorIfGreaterThanOneHundred(discountCart, "discount of cart");
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
