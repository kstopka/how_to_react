import { FunctionComponent, useContext, useEffect } from "react";
import { ContextCart } from "../context/contextCart";
import Product from "./Product";
import { ICartProduct, ActionTypeCart } from "../App.d";

interface CartProductProps {
    cartProduct: ICartProduct;
    maxQuantity: number;
}

const CartProduct: FunctionComponent<CartProductProps> = ({ cartProduct, maxQuantity }) => {
    const { stateCart, dispatchCart } = useContext(ContextCart);

    const { product, quantity, discount } = cartProduct;
    const { id, price } = product;
    const { totalValue, totalValueWithDiscount } = stateCart.cartProductList[0];

    useEffect(() => {
        dispatchCart({ type: ActionTypeCart.ChangeProductValue, id });
    }, [price, quantity, discount, dispatchCart, id]);

    return (
        <div className="cart-product">
            <Product product={product} />
            <p>Quantity: {quantity}</p>
            {quantity === maxQuantity ? (
                ""
            ) : (
                <button onClick={() => dispatchCart({ type: ActionTypeCart.ChangeQuantity, id, mode: "addition" })}>
                    Addition Quantity
                </button>
            )}
            {quantity <= 1 ? (
                ""
            ) : (
                <button onClick={() => dispatchCart({ type: ActionTypeCart.ChangeQuantity, id, mode: "subtraction" })}>
                    Subtraction Quantity
                </button>
            )}
            <p>Discount: {discount}%</p>
            <p>totalValue: {totalValue ? totalValue.toFixed(2) : ""}</p>
            <p>totalValueWithDiscount:{totalValueWithDiscount ? totalValueWithDiscount.toFixed(2) : ""} </p>
        </div>
    );
};

export default CartProduct;
