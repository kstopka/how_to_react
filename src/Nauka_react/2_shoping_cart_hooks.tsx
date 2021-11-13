import * as React from "react";
import { useState, FunctionComponent } from "react";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    const [availableProducts, setAvailableProducts] = useState(10);
    const [shoppingCart, setShoppingCart] = useState(5);

    const handleRemoveFromCart = () => {
        setShoppingCart(shoppingCart - 1);
    };
    const handleAddToCart = () => {
        setShoppingCart(shoppingCart + 1);
    };
    const handleBuy = () => {
        setAvailableProducts(availableProducts - shoppingCart);
        setShoppingCart(0);
    };
    return (
        <div className="wrapper">
            <h1 className="title">Shopping Cart</h1>
            <div className="shop_cart">
                <button disabled={shoppingCart ? false : true} onClick={handleRemoveFromCart}>
                    -
                </button>
                <span>{shoppingCart}</span>
                <button disabled={availableProducts === shoppingCart ? true : false} onClick={handleAddToCart}>
                    +
                </button>
            </div>
            {shoppingCart ? <button onClick={handleBuy}>KUP</button> : null}
        </div>
    );
};

export default App;
