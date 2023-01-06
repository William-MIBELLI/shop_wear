import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, changeQuantity } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import { CheckoutItemContainer, ImageContainer, Img, RemoveBtn, Quantity, Name, Price, Arrow, Value} from './CheckoutItem.style.jsx'

const CheckoutItem = ({ product }) => {

    const { name, quantity, price, imageUrl } = product
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)


    const removeClickHandler = () => {
        console.log('product dans removelcickhandler : ', name)
        dispatch(removeItem(cartItems, name))
    }

    const quantityClickHandler = event => {
        console.log('event : ',event)
        const { value } = event.target.attributes.value
        dispatch(changeQuantity(cartItems, name, value))
    }
    

  return (
    <CheckoutItemContainer>
        <ImageContainer>
            <Img src={imageUrl} alt={name}/>
        </ImageContainer>
        <Name>{name}</Name>
        <Quantity>
            <Arrow onClick={quantityClickHandler} value='-'>
                &#10094;
            </Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={quantityClickHandler} value='+'>
                &#10095;
            </Arrow>
        </Quantity>
        <Price>${price}</Price>
        <RemoveBtn onClick={removeClickHandler}>&#10005;</RemoveBtn>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem