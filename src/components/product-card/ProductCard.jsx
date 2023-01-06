
import Button, { BUTTON_TYPE_CLASSES,  } from '../button/Button'

import { CardContainer, Image, Footer, Name, Price } from './ProductCard.style'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

const ProductCard = ({ products }) => {

    const { id, name, price, imageUrl } = products
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const clickHandler = (event) => {
      console.log('cartitem depuis click productcard ',cartItems)
      dispatch(updateCart(cartItems, products))
    }

  return (
    <CardContainer key={id}>
        <Image  src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name>{name}</Name>
            <Price>{price}$</Price>
        </Footer>
        <Button button_type={BUTTON_TYPE_CLASSES.inverted} onClick={clickHandler}>Add to cart</Button>
    </CardContainer>
  )
}

export default ProductCard