export interface IProduct {
    id: string;
    name: string;
    price: number;
    category: string;
}

export interface ICartProducts {
    product: IProduct;
    quantity: number;
    discount: number;
    totalValue: number;
    totalValueWithDiscount: number;
}

export interface ICart {
    id: string;
    cartProductList: ICartProducts[];
    discountCart: number;
    discountCode: boolean;
    totalCartPrice: number;
}

export interface IInitialStateProducts {
    cartProductList: ICartProducts[];
}

export interface IInitialStateCart {
    id: string;
    cartProductList: ICartProducts[];
    discountCart: number;
    discountCode: boolean;
    totalCartPrice: number;
}

export interface IContextInitialProduct {
    state: IInitialStateProducts;
    dispatch: React.Dispatch<ActionsProducts>;
}
export interface IContextInitialCart {
    cart: IInitialStateCart;
    dispatch: React.Dispatch<ActionsCart>;
    // actions: IActions;
}

export enum ActionTypeProducts {
    ProductFromAPI,
    ChangeProductQuantity,
}

export interface ProductFromAPI {
    type: ActionTypeProducts.ProductFromAPI;
    cartProductList: ICartProducts[];
}
export interface ChangeProductQuantity {
    type: ActionTypeProducts.ChangeProductQuantity;
    id: string;
    quantity: number;
}

export type ActionsProducts = ProductFromAPI | ChangeProductQuantity;

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
    cartProduct: ICartProducts;
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
