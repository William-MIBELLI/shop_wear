import React from 'react'
import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/CartContext'
import './CartIcon.style.scss'


const CartIcon = () => {

  const { displayCart, setDisplayCart, nbItems } = useContext(CartContext)
  
  const clickHandler = () => {
    setDisplayCart(!displayCart)
  }
  
  return (
    <div className='cart-icon-container' onClick={clickHandler}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{nbItems}</span>
    </div>
  )
}

export default CartIcon