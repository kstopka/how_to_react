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
            const { mode, id } = action;
            const index = showIndex(id);
            const quantityToChange = state.cartProductList[index].quantity;

            let quantity: number;
            if (mode === "addition") {
                //NOTE: validajca? przyciski do zmiany wyłączają się kiedy trzeba
                quantity = quantityToChange + 1;
            } else if (mode === "subtraction") {
                quantity = quantityToChange - 1;
            } else if (mode === "start") {
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
        //TODO: powinno byc w reducer product
        case ActionTypeCart.ChangeProductValue: {
            const index = showIndex(action.id);
            const cartProduct = state.cartProductList[index];
            const { product, quantity, discount } = cartProduct;
            if (product.price < 0) {
                throw new Error("The price value cannot be less than 0");
            }
            const totalValue = quantity * product.price;
            if (cartProduct.discount > 100) {
                throw new Error("The discount cannot be greater than 100 percent");
            }

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
            if (discountCart > 100) {
                throw new Error("The discount cannot be greater than 100 percent");
            }
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
