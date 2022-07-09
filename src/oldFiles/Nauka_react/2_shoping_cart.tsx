import * as React from "react";

interface ShopingCartProps {}

interface ShopingCartState {
    availableProducts: number;
    shoppingCart: number;
}

class App extends React.Component<ShopingCartProps, ShopingCartState> {
    state = { availableProducts: 10, shoppingCart: 5 };

    private handleRemoveFromCart = () => {
        this.setState({ shoppingCart: this.state.shoppingCart - 1 });
    };
    private handleAddToCart = () => {
        this.setState({ shoppingCart: this.state.shoppingCart + 1 });
    };
    private handleBuy = () => {
        const { shoppingCart, availableProducts } = this.state;
        this.setState({ availableProducts: availableProducts - shoppingCart, shoppingCart: 0 });
    };
    render() {
        const { shoppingCart, availableProducts } = this.state;
        const style = !shoppingCart ? { opacity: 0.3 } : {};
        return (
            <div className="wrapper">
                <h1 className="title">Shoping Cart</h1>
                <div className="shop_cart">
                    <button disabled={shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>
                        -
                    </button>
                    <span style={style}>{shoppingCart}</span>
                    <button disabled={availableProducts === shoppingCart ? true : false} onClick={this.handleAddToCart}>
                        +
                    </button>

                    {shoppingCart ? <button onClick={this.handleBuy}>KUP</button> : null}
                </div>
            </div>
        );
    }
}

export default App;
