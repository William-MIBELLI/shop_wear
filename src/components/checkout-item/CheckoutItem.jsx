import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CheckoutItemContainer, ImageContainer, Img, RemoveBtn, Quantity, Name, Price, Arrow, Value} from './CheckoutItem.style.jsx'

const CheckoutItem = ({ product }) => {

    const { name, quantity, price, imageUrl } = product
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