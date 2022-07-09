import { FunctionComponent, useContext, useEffect } from "react";
import { ContextCart } from "../context/contextCart";
import Product from "./Product";
import { ICartProducts, ActionTypeCart } from "../App.d";

interface CartProductProps {
    cartProduct: ICartProducts;
    maxQuantity: number;
}

const CartProduct: FunctionComponent<CartProductProps> = ({ cartProduct, maxQuantity }) => {
    const { cart, actions } = useContext(ContextCart);

    const { product, quantity, discount } = cartProduct;
    const { id, price } = product;
    const { totalValue, totalValueWithDiscount } = cart.cartProductList[0];

    useEffect(() => {
        actions.changeProductValue(id);
    }, [price, quantity, discount, id, actions]);

    return (
        <div className="cart-product">
            <Product product={product} />
            <p>Quantity: {quantity}</p>
            {quantity === maxQuantity ? (
                ""
            ) : (
                <button onClick={() => actions.additionProduct(id)}>Addition Quantity</button>
            )}
            {quantity <= 1 ? "" : <button onClick={() => actions.subtractionProduct(id)}>Subtraction Quantity</button>}
            <p>Discount: {discount}%</p>
            <p>totalValue: {totalValue >= 0 ? totalValue.toFixed(2) : ""}</p>
            <p>totalValueWithDiscount:{totalValueWithDiscount >= 0 ? totalValueWithDiscount.toFixed(2) : ""} </p>
        </div>
    );
};

export default CartProduct;
