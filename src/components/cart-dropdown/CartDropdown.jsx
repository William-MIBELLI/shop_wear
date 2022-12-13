import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import Button from '../button/Button'

import CartItem from '../cart-item/CartItem'
import { CartDropdownContainer, EmptyMsg, CartItems } from './CartDropdown.style'

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckHandler = () => {
    navigate('/checkout')
  }


  return (
    <CartDropdownContainer>
      <CartItems>
        { cartItems.length !== 0 ? 
          cartItems.map(product => {
          return <CartItem product={product} />
        }) : <EmptyMsg>Cart empty :(</EmptyMsg>}
      </CartItems>
      <Button onClick={goToCheckHandler}>checkout</Button>     
    </CartDropdownContainer>
  )
}

export default CartDropdown