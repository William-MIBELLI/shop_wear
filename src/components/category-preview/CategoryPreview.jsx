import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../product-card/ProductCard'

import { PreviewContainer, Title, Preview} from './CategoryPreview.style.jsx'

const CategoryPreview = ({ title, products}) => {


  return (
    <PreviewContainer>
        <h2>
            <Link to={`${title}`}>
                <Title>{title}</Title>
            </Link>
        </h2>
        <Preview>
            {
                products.filter((_,idx) => idx < 4).map(product => {
                    return (
                        <ProductCard  products={product}/>
                    )
                })
            }
        </Preview>
    </PreviewContainer>
  )
}

export default CategoryPreview