import { createSelector } from 'reselect'

const selectCartReducer = state => state.cart

export const selectDisplayCart = (state) => {
    return state.cart.displayCart
}
export const selectCartItems = (state) => {
    return state.cart.cartItems
}

export const selectCartForCheckout = state => {
    const { cartItems, cartTotal } = state.cart
    return { cartItems, cartTotal }
}
 export const selectCartTotal = createSelector(
    [selectCartReducer],
    cart => cart.cartItems.reduce(
        (total, current) => total + current.quantity * current.price,
        0
      )
 )

 export const selectCartNbItems = createSelector(
    [selectCartReducer], 
    cart => cart.cartItems.reduce(
        (total, current) => total + current.quantity,
        0
      )
 )