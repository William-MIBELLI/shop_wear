import React from 'react'
import './Checkout.style.scss'
import { useEffect } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartForCheckout } from '../../store/cart/cart.selector'
import { setDisplayCart } from '../../store/cart/cart.action'

const Checkout = () => {

    const { cartItems, cartTotal } = useSelector(selectCartForCheckout)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDisplayCart())
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
        {cartItems && cartItems.map(product => {
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