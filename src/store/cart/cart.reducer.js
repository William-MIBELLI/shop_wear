import { CART_ACTION_TYPE } from "./cart.type"


const CART_INITIAL_VALUE = {
    displayCart: false,
    cartItems: [],
    nbItems: 0,
    cartTotal: 0,
}

export const cartReducer = ( state = CART_INITIAL_VALUE, action = {}) => {
    const { type, payload } = action
    switch(type){
        case CART_ACTION_TYPE.CHANGE_DISPLAY_CART:
            return{
                ...state,
                displayCart: payload
            }
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}