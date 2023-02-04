import { calkTotalPrice } from "./calkTotalPrice";

export const geLocalStorage = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calkTotalPrice(items);
    return {
        items,
        totalPrice
    }
}
