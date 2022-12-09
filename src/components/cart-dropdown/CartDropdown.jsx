import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import './CartDropdown.style.scss'

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckHandler = () => {
    navigate('/checkout')
  }


  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        { cartItems.length !== 0 ? 
          cartItems.map(product => {
          return <CartItem product={product} />
        }) : <div className='empty-message'>Cart empty :(</div>}
      </div>
      <Button onClick={goToCheckHandler}>checkout</Button>     
    </div>
  )
}

export default CartDropdown