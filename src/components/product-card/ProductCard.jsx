import { useContext } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import { CartContext } from '../../contexts/CartContext'

import { CardContainer, Image, Footer, Name, Price, Btn } from './ProductCard.style'

const ProductCard = ({ products }) => {

    const { id, name, price, imageUrl } = products
    const { updateCart } = useContext(CartContext)

    const clickHandler = (event) => {
      updateCart(products)
    }

  return (
    <CardContainer key={id}>
        <Image  src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name>{name}</Name>
            <Price>{price}$</Price>
        </Footer>
        <Btn button_type={BUTTON_TYPE_CLASSES.inverted} onClick={clickHandler}>Add to cart</Btn>
    </CardContainer>
  )
}

export default ProductCard