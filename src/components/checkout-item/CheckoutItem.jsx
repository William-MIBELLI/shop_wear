import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CheckoutItem.style.scss'

const CheckoutItem = ({ product }) => {

    const { id, name, quantity, price, imageUrl } = product
    const { removeItem, changeQuantity } = useContext(CartContext)

    const removeClickHandler = () => {
        console.log('product dans removelcickhandler : ', name)
        removeItem(name)
    }

    const quantityClickHandler = event => {
        console.log('event : ',event)
        const { value } = event.target.attributes.value
        changeQuantity(name, value)
    }
    

  return (
    <div className='checkout-item-container'>
        <div className="image-container">
            <img src={imageUrl} alt={name}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className="arrow" onClick={quantityClickHandler} value='-'>
                &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className="arrow" onClick={quantityClickHandler} value='+'>
                &#10095;
            </div>
        </span>
        <span className='price'>${price}</span>
        <div  className='remove-button' onClick={removeClickHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem