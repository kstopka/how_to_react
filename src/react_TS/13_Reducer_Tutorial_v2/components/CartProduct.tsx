import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import { ICartProduct, IInitialStateProduct } from "../App.d";
import { ContextProduct } from "../context/contextProduct";
import { useCalculateCartProduct } from "../hooks/useCalculateCartProduct";
import { useCartReducer } from "../hooks/useCartReducer";
import Product from "./Product";

interface CartProductProps {
    cartProduct: ICartProduct;
    // index: number;
}

const CartProduct: FunctionComponent<CartProductProps> = ({ cartProduct }) => {
    const { product, quantity, discount } = cartProduct;
    const { stateCart, addition, subtraction, subtractionAllProduct } = useCartReducer();
    const { totalValue, totalValueWithDiscount } = useCalculateCartProduct(cartProduct);

    return (
        <div className="cart-product">
            <Product product={product} />
            {/* <p>Quantity: {quantity}</p>
            <p>Discount: {discount}%</p>
            <p>totalValue: {totalValue ? totalValue.toFixed(2) : ""}</p>
            <p>totalValueWithDiscount:{totalValueWithDiscount ? totalValueWithDiscount.toFixed(2) : ""} </p> */}
        </div>
    );
};

export default CartProduct;
