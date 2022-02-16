import {
    IInitialStateCart,
    ActionTypeCart,
    ActionsCart,
    AdditionToCart,
    ChangeQuantity,
    RemoveFromCart,
    ClearCart,
    ChangeDiscountCode,
    ChangeProductValue,
    ChangeCartValue,
} from "../App.d";

const actionOnQty = {
    addition: 1,
    subtraction: -1,
    start: 0,
};

class ReducerActions {
    static showIndex = (state: IInitialStateCart, id: string) =>
        state.cartProductList.findIndex((item) => item.product.id === id);
    static addToCart = (state: IInitialStateCart, action: AdditionToCart) => {
        return {
            ...state,
            cartProductList: [...state.cartProductList, action.cartProduct],
        };
    };
    static romoveFromCart = (state: IInitialStateCart, action: RemoveFromCart) => {
        return {
            ...state,
            cartProductList: [...state.cartProductList.filter((item) => item.product.id !== action.id)],
        };
    };
    static changeQuantity = (state: IInitialStateCart, action: ChangeQuantity) => {
        const { mode, id } = action;
        const index = this.showIndex(state, id);
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
    };
    static clearCart = (state: IInitialStateCart, action: ClearCart) => {
        return {
            ...state,
            cartProductList: [],
        };
    };
    static changeDiscountCode = (state: IInitialStateCart, action: ChangeDiscountCode) => {
        return {
            ...state,
            discountCode: !state.discountCode,
        };
    };
    static changeProductValue = (state: IInitialStateCart, action: ChangeProductValue) => {
        const index = this.showIndex(state, action.id);
        const cartProduct = state.cartProductList[index];
        const { product, quantity, discount } = cartProduct;
        const totalValue = quantity * product.price;

        const discountPercent = (100 - discount) / 100;
        const totalValueWithDiscount = totalValue * discountPercent;
        return {
            ...state,
            cartProductList: state.cartProductList.map((cartProduct, i) =>
                i === index ? { ...cartProduct, totalValue, totalValueWithDiscount } : cartProduct
            ),
        };
    };
    static changeCartValue = (state: IInitialStateCart, action: ChangeCartValue) => {
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
    };
}

export const reducerCart = (state: IInitialStateCart, action: ActionsCart) => {
    switch (action.type) {
        case ActionTypeCart.AdditionToCart: {
            return ReducerActions.addToCart(state, action);
        }
        case ActionTypeCart.RemoveFromCart: {
            return ReducerActions.romoveFromCart(state, action);
        }
        case ActionTypeCart.ChangeQuantity: {
            return ReducerActions.changeQuantity(state, action);
        }
        case ActionTypeCart.ClearCart: {
            return ReducerActions.clearCart(state, action);
        }
        case ActionTypeCart.ChangeDiscountCode: {
            return ReducerActions.changeDiscountCode(state, action);
        }
        case ActionTypeCart.ChangeProductValue: {
            return ReducerActions.changeProductValue(state, action);
        }
        case ActionTypeCart.ChangeCartValue: {
            return ReducerActions.changeCartValue(state, action);
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
