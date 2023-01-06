import { useEffect } from "react";
import { createContext, useState, useReducer } from "react";

const addItemsToCart = (cart, productToAdd) => {
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

export const CartContext = createContext({
  displayCart: false,
  setDisplayCart: () => null,
  cartItems: [],
  addItemsToCart: () => {},
  nbItems: 0,
  cartTotal: 0,
});

const removeItemFromCart = (cart, itemToRemove) => {
  const temp = cart.filter((item) => {
    return item.name !== itemToRemove;
  });
  return temp;
};

const changeQuantityItemOnCart = (cart, itemName, mode) => {
  const finded = cart.find((item) => item.name === itemName);
  if (finded.quantity === 1 && mode !== "+") {
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

const ACTION_TYPE = {
  CHANGE_DISPLAY_CART: 'CHANGE_DISPLAY_CART',
  SET_CART_ITEMS: 'SET_CART_ITEM'
}

const INITIAL_STATE = {
  displayCart: false,
  cartItems: [],
  nbItems: 0,
  cartTotal: 0,
}


const cartReducer = (state, action) => {
  const { type, payload } = action

  switch(type){
    case ACTION_TYPE.CHANGE_DISPLAY_CART:
      return {
        ...state,
        displayCart: payload
      }
    case ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    default:
      throw new Error(`action type ${type} not handled`)
  }
}

export const CartProvider = ({ children }) => {

  const [ { displayCart, cartItems, nbItems, cartTotal }, dispatch ] = useReducer(cartReducer,INITIAL_STATE)

  const setDisplayCart = () => {
    dispatch({type: ACTION_TYPE.CHANGE_DISPLAY_CART, payload: !displayCart})
  }

  const updateCartItem = (newCartItem) => {
    const newNbItems = newCartItem.reduce(
      (total, current) => total + current.quantity,
      0
    );
    const newTotal = newCartItem.reduce(
      (total, current) => total + current.quantity * current.price,
      0
    );
    dispatch({type: ACTION_TYPE.SET_CART_ITEMS, payload: {cartItems: newCartItem, nbItems: newNbItems, cartTotal: newTotal}})
  }


  const updateCart = (product) => {
    const newCartItem = addItemsToCart(cartItems, product)
    updateCartItem(newCartItem)
  };

  const removeItem = (itemToRemove) => {
    const newCartItem = removeItemFromCart(cartItems, itemToRemove)
    updateCartItem(newCartItem)
  };

  const changeQuantity = (itemName, mode) => {
    const newCartItem = changeQuantityItemOnCart(cartItems, itemName, mode)
    updateCartItem(newCartItem)
  };
  

  const value = {
    displayCart,
    setDisplayCart,
    updateCart,
    cartItems,
    nbItems,
    removeItem,
    changeQuantity,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
