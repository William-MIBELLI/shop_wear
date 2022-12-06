import React from 'react'
import Button from '../button/Button'
import './ProductCard.style.scss'

const ProductCard = ({ products }) => {

    const { id, name, price, imageUrl } = products

  return (
    <div key={id} className='product-card-container'>
        <img  src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}$</span>
        </div>
        <Button button_type='inverted'>Add to cart</Button>
    </div>
  )
}

export default ProductCard