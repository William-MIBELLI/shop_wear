import { createSelector } from 'reselect'
import { CartType } from './cart.type'

import { rootState } from '../store'

const selectCartReducer = (state: rootState) : CartType => state.cart

export const selectDisplayCart = (state: rootState) => {
    return state.cart.displayCart as boolean
}
export const selectCartItems = (state: rootState) => {
    return state.cart.cartItems
}

export const selectCartForCheckout = (state: rootState) => {
    const { cartItems } = state.cart
    return { cartItems }
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