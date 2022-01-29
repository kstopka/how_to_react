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
    // totalCartPrice: number;
}

export interface IInitialStateCart {
    cartProductList: ICartProduct[];
}

export interface IContextInitialCart {
    stateCart: IInitialStateCart;
    dispatchCart: React.Dispatch<ActionsCart>;
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
    cartProductList: ICartProduct[];
}
export interface AdditionProduct {
    type: ActionType.AdditionProduct;
    index: number;
}
export interface SubtractionProduct {
    type: ActionType.SubtractionProduct;
    index: number;
}
export interface SubtractionAllProduct {
    type: ActionType.SubtractionAllProduct;
    index: number;
}
export interface SubmitCart {
    type: ActionType.SubmitCart;
}

export type ActionsCart = ProductFromAPI | AdditionProduct | SubtractionProduct | SubtractionAllProduct | SubmitCart;
