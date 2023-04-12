import { AnyAction } from "redux"

import { CartType } from "./cart.type"
import { setDisplayCart, updateCartItem } from "./cart.action"

const CART_INITIAL_VALUE: CartType = {
    displayCart: false,
    cartItems: [],
}

export const cartReducer = ( state = CART_INITIAL_VALUE, action = {} as AnyAction): CartType => {

    if(setDisplayCart.match(action)){
        return{
            ...state,
            displayCart: action.payload
        }
    }
    if(updateCartItem.match(action)){
        return {
            ...state,
            cartItems : action.payload
        }
    }

    return state

}