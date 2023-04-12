import { CategoryItem } from "../category/category.types"

export enum CART_ACTION_TYPE  {
    CHANGE_DISPLAY_CART = 'CHANGE_DISPLAY_CART',
    SET_CART_ITEMS = 'SET_CART_ITEMS'
}

export type CartType = {
    displayCart: Boolean,
    cartItems: Item[]
}

export type Item = CategoryItem & {
    quantity: number
}