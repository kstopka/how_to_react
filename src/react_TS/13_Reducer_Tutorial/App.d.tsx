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
    // totalValue: number;
    // totalValueWithDiscount: number;
}

export interface ICart {
    id: string;
    cartProductList: ICartProduct[];
    discountCart: number;
    discountCode: boolean;
    // totalCartPrice: number;
}

export interface IInitialStateCart {
    cartProductList: ICartProduct[];
}

export enum ActionType {
    ProductFromAPI,
    AdditionProduct,
    SubtractionProduct,
    SubtractionAllProduct,
    SubmitCart,
}

export interface ProductFromAPI {
    type: ActionType.ProductFromAPI;
    payload: { cartProductList: ICartProduct[] };
}
export interface AdditionProduct {
    type: ActionType.AdditionProduct;
    payload: { index: number };
}
export interface SubtractionProduct {
    type: ActionType.SubtractionProduct;
}
export interface SubtractionAllProduct {
    type: ActionType.SubtractionAllProduct;
    payload: { index: number };
}
export interface SubmitCart {
    type: ActionType.SubmitCart;
}

export type ActionsCart = ProductFromAPI | AdditionProduct | SubtractionProduct | SubtractionAllProduct | SubmitCart;
