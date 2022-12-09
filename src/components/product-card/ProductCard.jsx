import { useContext } from 'react'
import Button from '../button/Button'
import './ProductCard.style.scss'
import { CartContext } from '../../contexts/CartContext'

const ProductCard = ({ products }) => {

    const { id, name, price, imageUrl } = products
    const { updateCart } = useContext(CartContext)

    const clickHandler = (event) => {
      updateCart(products)
    }

  return (
    <div key={id} className='product-card-container'>
        <img  src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}$</span>
        </div>
        <Button button_type='inverted' onClick={clickHandler}>Add to cart</Button>
    </div>
  )
}

export default ProductCard