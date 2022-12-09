import React from 'react'
import './Checkout.style.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useEffect } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

const Checkout = () => {

    const { cartItems, setDisplayCart, cartTotal } = useContext(CartContext)

    useEffect(() => {
        setDisplayCart(false)
    },[])


  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Products</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(product => {
            return (
                <CheckoutItem key={product.id} product={product}/>
            )
        })}
        <div className='total'>
            TOTAL : ${cartTotal}
        </div>
    </div>
  )
}

export default Checkout