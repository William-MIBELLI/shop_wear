import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import { useSelector } from 'react-redux'
import CartItem from '../cart-item/CartItem'
import { CartDropdownContainer, EmptyMsg, CartItems } from './CartDropdown.style'
import { selectCartItems } from '../../store/cart/cart.selector'

const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems)
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