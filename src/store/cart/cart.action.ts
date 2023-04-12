import { AnyAction } from "redux";
import { ActionWithPayload, withMatcher } from "../../utils/helper";
import { CategoryItem } from "../category/category.types";
import {  CART_ACTION_TYPE, Item } from "./cart.type";


export type SetDisplayCart = ActionWithPayload<CART_ACTION_TYPE.CHANGE_DISPLAY_CART, boolean>

export type UpdateCartItem = ActionWithPayload<CART_ACTION_TYPE.SET_CART_ITEMS, Item[]>




export const setDisplayCart = withMatcher((displayCart = true) : SetDisplayCart => {
  return {type: CART_ACTION_TYPE.CHANGE_DISPLAY_CART, payload: !displayCart}
})

export const updateCartItem = withMatcher((newCartItem: Item[]): UpdateCartItem => {
  return {type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItem}
})





export const updateCart = (cartItems: Item[], product: CategoryItem) : AnyAction => {
    const newCartItem = addItemsToCart(cartItems, product)
    return updateCartItem(newCartItem)
};

export const removeItem = (state: Item[], itemToRemove: string): AnyAction => {
    const newCartItem = removeItemFromCart(state, itemToRemove)
    return updateCartItem(newCartItem)
};

export const changeQuantity = (state: Item[], itemName: string, mode: string): AnyAction => {
    const newCartItem = changeQuantityItemOnCart(state, itemName, mode)
    return updateCartItem(newCartItem)
};





const removeItemFromCart = (cart: Item[], itemToRemove: string): Item[] => {
  const temp = cart.filter((item) => {
    return item.name !== itemToRemove;
  });
  return temp;
};

const changeQuantityItemOnCart = (cart: Item[], itemName: string, mode: string): Item[] => {

  const finded = cart.find((item) => item.name === itemName);

  if (finded && finded.quantity === 1 && mode !== "+") {
    return removeItemFromCart(cart, finded.name);
  }
  const temp = cart.map((product) => {
    return product.name === itemName
      ? {
          ...product,
          quantity: mode === "+" ? product.quantity + 1 : product.quantity - 1,
        }
      : product;
  });

  return temp;
};

const addItemsToCart = (cart: Item[], productToAdd: CategoryItem): Item[] => {
  const existingItem = cart.find((item) => item.id === productToAdd.id);
  if (existingItem) {
    const temp = cart.map((product) => {
      return product.id === productToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });
    return temp;
  }
  const np = { ...productToAdd, quantity: 1 };
  return [...cart, np];
};