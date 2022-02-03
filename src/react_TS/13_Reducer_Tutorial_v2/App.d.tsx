export interface IProduct {
    id: string;
    name: string;
    price: number;
    category: string;
}

export interface ICartProduct {
    product: IProduct;
    quantity: number;
    discount: number;
    totalValue: number;
    totalValueWithDiscount: number;
}

export interface ICart {
    id: string;
    cartProductList: ICartProduct[];
    discountCart: number;
    discountCode: boolean;
    totalCartPrice: number;
}

export interface IInitialStateProduct {
    cartProductList: ICartProduct[];
}

export interface IInitialStateCart {
    id: string;
    cartProductList: ICartProduct[];
    discountCart: number;
    discountCode: boolean;
    totalCartPrice: number;
}

export interface IContextInitialProduct {
    stateProduct: IInitialStateProduct;
    dispatchProduct: React.Dispatch<ActionsProduct>;
}
export interface IContextInitialCart {
    cart: IInitialStateCart;
    dispatch: React.Dispatch<ActionsCart>;
    // actions: IActions;
}

export enum ActionTypeProduct {
    ProductFromAPI,
    ChangeProductQuantity,
}

export interface ProductFromAPI {
    type: ActionTypeProduct.ProductFromAPI;
    cartProductList: ICartProduct[];
}
export interface ChangeProductQuantity {
    type: ActionTypeProduct.ChangeProductQuantity;
    id: string;
    quantity: number;
}

export type ActionsProduct = ProductFromAPI | ChangeProductQuantity;

export enum ActionTypeCart {
    AdditionToCart,
    RemoveFromCart,
    ChangeQuantity,
    ClearCart,
    ChangeDiscountCode,
    ChangeProductValue,
    ChangeCartValue,
}
export interface AdditionToCart {
    type: ActionTypeCart.AdditionToCart;
    cartProduct: ICartProduct;
}
export interface RemoveFromCart {
    type: ActionTypeCart.RemoveFromCart;
    id: string;
}
export interface ChangeQuantity {
    type: ActionTypeCart.ChangeQuantity;
    id: string;
    mode: "start" | "addition" | "subtraction";
}
export interface ClearCart {
    type: ActionTypeCart.ClearCart;
}
export interface ChangeDiscountCode {
    type: ActionTypeCart.ChangeDiscountCode;
}
export interface ChangeProductValue {
    type: ActionTypeCart.ChangeProductValue;
    id: string;
}
export interface ChangeCartValue {
    type: ActionTypeCart.ChangeCartValue;
}

export type ActionsCart =
    | AdditionToCart
    | RemoveFromCart
    | ChangeQuantity
    | ClearCart
    | ChangeDiscountCode
    | ChangeProductValue
    | ChangeCartValue;

export interface IActions {
    // additionProduct: (dispatch: React.Dispatch<ActionsProduct>) => (cartProduct: ICartProduct) => void;
    // removeProduct: (dispatch: React.Dispatch<ActionsProduct>) => (id: string) => void;
    // subtractionAllProduct: (dispatch: React.Dispatch<ActionsProduct>) => () => void;
    // submittCart: (dispatch: React.Dispatch<ActionsProduct>) => (cartProductList: ICartProduct[]) => void;
    // changeDiscountCode: (dispatch: React.Dispatch<ActionsProduct>) => () => void;
    // changeCartValue: (dispatch: React.Dispatch<ActionsProduct>) => () => void;
    // changeProductValue: (dispatch: React.Dispatch<ActionsProduct>) => (id: string) => void;
}
