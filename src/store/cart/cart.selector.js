export const selectDisplayCart = (state) => {
    //console.log('select displaycart state.cart : ', state.cart)
    return state.cart.displayCart
}
export const selectCartItems = (state) => {
    console.log('cartitem depuis selector  : ', state.cart)
    return state.cart.cartItems
}
export const selectCartNbItems = state => {
    return state.cart.nbItems
}
export const selectCartForCheckout = state => {
    console.log('state cart : ', state.cart)
    const { cartItems, cartTotal } = state.cart
    return { cartItems, cartTotal }
}