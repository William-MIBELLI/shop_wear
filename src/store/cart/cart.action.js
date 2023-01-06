import { CART_ACTION_TYPE } from "./cart.type";

export const updateCart = (cartItems, product) => {
    const newCartItem = addItemsToCart(cartItems, product)
    return updateCartItem(newCartItem)
};

export const removeItem = (state, itemToRemove) => {
    const newCartItem = removeItemFromCart(state, itemToRemove)
    return updateCartItem(newCartItem)
};

export const changeQuantity = (state, itemName, mode) => {
    const newCartItem = changeQuantityItemOnCart(state, itemName, mode)
    return updateCartItem(newCartItem)
};

export const setDisplayCart = (displayCart = true) => {
    return {type: CART_ACTION_TYPE.CHANGE_DISPLAY_CART, payload: !displayCart}
  }
const updateCartItem = (newCartItem) => {

    return {type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: {cartItems: newCartItem}}
  }

  const removeItemFromCart = (cart, itemToRemove) => {
    const temp = cart.filter((item) => {
      return item.name !== itemToRemove;
    });
    return temp;
  };
  
  const changeQuantityItemOnCart = (cart, itemName, mode) => {

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