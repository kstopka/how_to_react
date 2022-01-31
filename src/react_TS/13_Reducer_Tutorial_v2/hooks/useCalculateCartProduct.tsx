import { ICartProduct, IProduct } from "../App.d";

export const useCalculateCartProduct = (cartProduct: ICartProduct) => {
    const calculateTotalValue = (cartProduct: ICartProduct) => {
        const { price } = cartProduct.product;
        const totalValue = cartProduct.quantity * price;
        return totalValue;
    };
    const totalValue = calculateTotalValue(cartProduct);
    const changeValueToPercent = (discount: number): number => {
        return (100 - discount) / 100;
    };
    const discountPercent = changeValueToPercent(cartProduct.discount);

    const calcTotalValueWithDiscount = () => {
        const totalValueWithDiscount = totalValue * discountPercent;
        return totalValueWithDiscount;
    };
    const totalValueWithDiscount = calcTotalValueWithDiscount();

    return { totalValue, totalValueWithDiscount };
};
