import React from 'react'
import { CartItemContainer, Img, Details, Name, Price} from './CartItem.style'


const CartItem = ({ product}) => {

    const { id, name, quantity, price, imageUrl } = product

  return (
    <CartItemContainer key={id}>
      <Img src={imageUrl} alt={name} />
      <Details>
        <Name>{name}</Name>
        <Price>{quantity} x {price}$</Price>
      </Details>
    </CartItemContainer>
  )
}

export default CartItem