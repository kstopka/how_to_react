import * as React from "react";
import { FunctionComponent } from "react";
import { ICartProduct } from "../App.d";
import Product from "./Product";

interface CartProductProps {
    cartProduct: ICartProduct;
}

const CartProduct: FunctionComponent<CartProductProps> = ({ cartProduct }) => {
    const { product, quantity, discount } = cartProduct;
    return (
        <li className="cart-product">
            <Product product={product} />
            <p>Quantity: {quantity}</p>
            <p>discount: {discount}</p>
            {/* <p>totalValue: 200</p> */}
            {/* <p>totalValueWithDiscount: 180</p> */}
        </li>
    );
};

export default CartProduct;
