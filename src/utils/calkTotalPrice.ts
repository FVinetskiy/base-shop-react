import { CartItemType } from "../redux/slices/cartSlice";

export const calkTotalPrice = (items : CartItemType[]) => {
    return items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
    }, 0);
}