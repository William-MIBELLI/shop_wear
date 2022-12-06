import React from 'react'
import Button from '../button/Button'
import './CartDropdown.style.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items" />
        <Button >checkout</Button>
    </div>
  )
}

export default CartDropdown