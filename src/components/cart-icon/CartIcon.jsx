import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayCart } from '../../store/cart/cart.action'
import { selectCartNbItems, selectDisplayCart } from '../../store/cart/cart.selector'

import { CartIconContainer, ShoppingIcon, ItemCount} from './CartIcon.style'


const CartIcon = () => {

  const displayCart = useSelector(selectDisplayCart)
  const nbItems = useSelector(selectCartNbItems)
  const dispatch = useDispatch()
  
  const clickHandler = () => {
    dispatch(setDisplayCart(displayCart));
  }
  
  return (
    <CartIconContainer onClick={clickHandler}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{nbItems}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon