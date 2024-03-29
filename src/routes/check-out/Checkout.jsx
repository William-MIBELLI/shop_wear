import React from 'react'
import './Checkout.style.scss'
import { useEffect } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartForCheckout, selectCartTotal } from '../../store/cart/cart.selector'
import { setDisplayCart } from '../../store/cart/cart.action'
import PaymentForm from '../../components/payment-form/payment-form'

const Checkout = () => {

    const { cartItems } = useSelector(selectCartForCheckout)
    const cartTotal = useSelector(selectCartTotal)
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
        <PaymentForm/>
    </div>
  )
}

export default Checkout