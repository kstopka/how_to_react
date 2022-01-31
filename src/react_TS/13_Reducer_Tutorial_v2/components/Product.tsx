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
            <p>price: {price}</p>
            <p>category: {category}</p>
        </div>
    );
};

export default Product;
