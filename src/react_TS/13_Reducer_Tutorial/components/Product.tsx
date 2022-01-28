import * as React from "react";
import { FunctionComponent } from "react";
import { IProduct } from "../App.d";

interface ProductProps {
    product: IProduct;
}

const Product: FunctionComponent<ProductProps> = ({ product }) => {
    const { name, price, category } = product;
    return (
        <div className="product">
            <p style={{ color: "red" }}>name: {name}</p>
            <p>price: {price}</p>
            <p>category: {category}</p>
            {/* NOTE: jeżeli ilość 0 button się nie renderuje */}
            <button>subbtraction</button>
            <button>addition</button>
            <button>removeAll</button>
            <button>submit</button>
        </div>
    );
};

export default Product;
