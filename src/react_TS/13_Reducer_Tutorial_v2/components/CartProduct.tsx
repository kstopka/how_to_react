import { FunctionComponent, useContext, useEffect } from "react";
import { ContextCart } from "../context/contextCart";
import Product from "./Product";
import { ICartProduct, ActionTypeCart } from "../App.d";

interface CartProductProps {
    cartProduct: ICartProduct;
    maxQuantity: number;
}

const CartProduct: FunctionComponent<CartProductProps> = ({ cartProduct, maxQuantity }) => {
    const { cart, dispatch } = useContext(ContextCart);

    const { product, quantity, discount } = cartProduct;
    const { id, price } = product;
    const { totalValue, totalValueWithDiscount } = cart.cartProductList[0];

    useEffect(() => {
        dispatch({ type: ActionTypeCart.ChangeProductValue, id });
    }, [price, quantity, discount, dispatch, id]);

    return (
        <div className="cart-product">
            <Product product={product} />
            <p>Quantity: {quantity}</p>
            {quantity === maxQuantity ? (
                ""
            ) : (
                <button onClick={() => dispatch({ type: ActionTypeCart.ChangeQuantity, id, mode: "addition" })}>
                    Addition Quantity
                </button>
            )}
            {quantity <= 1 ? (
                ""
            ) : (
                <button onClick={() => dispatch({ type: ActionTypeCart.ChangeQuantity, id, mode: "subtraction" })}>
                    Subtraction Quantity
                </button>
            )}
            <p>Discount: {discount}%</p>
            <p>totalValue: {totalValue >= 0 ? totalValue.toFixed(2) : ""}</p>
            <p>totalValueWithDiscount:{totalValueWithDiscount >= 0 ? totalValueWithDiscount.toFixed(2) : ""} </p>
        </div>
    );
};

export default CartProduct;
