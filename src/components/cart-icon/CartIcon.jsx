import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { CartIconContainer, ShoppingIcon, ItemCount} from './CartIcon.style'


const CartIcon = () => {

  const { displayCart, setDisplayCart, nbItems } = useContext(CartContext)
  
  const clickHandler = () => {
    setDisplayCart(!displayCart)
  }
  
  return (
    <CartIconContainer onClick={clickHandler}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{nbItems}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon