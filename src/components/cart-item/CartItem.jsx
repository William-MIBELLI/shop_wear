import React from 'react'
import './CartItem.style.scss'


const CartItem = ({ product}) => {

    const { id, name, quantity, price, imageUrl } = product

  return (
    <div key={id} className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className='price'>{quantity} x {price}$</span>
      </div>
    </div>
  )
}

export default CartItem