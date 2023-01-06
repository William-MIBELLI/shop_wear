import { CART_ACTION_TYPE } from "./cart.type";

export const updateCart = (cartItems, product) => {
    const newCartItem = addItemsToCart(cartItems, product)
    return updateCartItem(newCartItem)
};

export const removeItem = (state, itemToRemove) => {
    console.log('click removeitem, state : ', state.cart)
    const newCartItem = removeItemFromCart(state, itemToRemove)
    return updateCartItem(newCartItem)
};

export const changeQuantity = (state, itemName, mode) => {
    console.log('click changequantity')
    const newCartItem = changeQuantityItemOnCart(state, itemName, mode)
    return updateCartItem(newCartItem)
};

export const setDisplayCart = (displayCart = true) => {
    //console.log('displayCart, state : ', state)
    return {type: CART_ACTION_TYPE.CHANGE_DISPLAY_CART, payload: !displayCart}
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
    return {type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: {cartItems: newCartItem, nbItems: newNbItems, cartTotal: newTotal}}
  }

  const removeItemFromCart = (cart, itemToRemove) => {
    const temp = cart.filter((item) => {
      return item.name !== itemToRemove;
    });
    return temp;
  };
  
  const changeQuantityItemOnCart = (cart, itemName, mode) => {
    console.log("mode : ", mode);
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