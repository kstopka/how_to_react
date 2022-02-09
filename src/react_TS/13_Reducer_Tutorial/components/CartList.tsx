import { FunctionComponent } from "react";
import { ICartProducts } from "../App.d";
import { useCartList } from "../hooks/useCartList";
import { useCartReducer } from "../hooks/useCartReducer";
import CartProduct from "./CartProduct";

interface CartListProps {
    cartProduct: ICartProducts;
}

const CartList: FunctionComponent<CartListProps> = ({ cartProduct }) => {
    const { additionProduct, removeProduct } = useCartReducer();
    const { isDisabledButtonAdd, addedProductToCart } = useCartList(cartProduct);

    return (
        <li>
            {cartProduct.product.name}
            {addedProductToCart ? (
                <div>
                    <CartProduct
                        key={cartProduct.product.id}
                        cartProduct={addedProductToCart}
                        maxQuantity={cartProduct.quantity}
                    />
                    <button onClick={() => removeProduct(cartProduct.product.id)}>Remove from Cart</button>
                </div>
            ) : (
                <button onClick={() => additionProduct(cartProduct)} disabled={isDisabledButtonAdd}>
                    Add to Cart
                </button>
            )}
        </li>
    );
};

export default CartList;
