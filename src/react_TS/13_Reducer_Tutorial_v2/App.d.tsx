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
    // totalValue: number | null;
    // totalValueWithDiscount: number | null;
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
    stateCart: IInitialStateCart;
    dispatchCart: React.Dispatch<ActionsCart>;
}

export enum ActionTypeProduct {
    ProductFromAPI,
    AdditionProduct,
    SubtractionProduct,
    SubtractionAllProduct,
    SubmitCart,
}

export interface ProductFromAPI {
    type: ActionTypeProduct.ProductFromAPI;
    cartProductList: ICartProduct[];
}
export interface AdditionProduct {
    type: ActionTypeProduct.AdditionProduct;
    index: number;
}
export interface SubtractionProduct {
    type: ActionTypeProduct.SubtractionProduct;
    index: number;
}
export interface SubtractionAllProduct {
    type: ActionTypeProduct.SubtractionAllProduct;
    index: number;
}
export interface SubmitCart {
    type: ActionTypeProduct.SubmitCart;
}

export type ActionsProduct = ProductFromAPI | AdditionProduct | SubtractionProduct | SubtractionAllProduct | SubmitCart;

export enum ActionTypeCart {
    AdditionToCart,
    RemoveFromCart,
    ChangeQuantity,
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
    mode: string;
}

export type ActionsCart = AdditionToCart | RemoveFromCart | ChangeQuantity;
