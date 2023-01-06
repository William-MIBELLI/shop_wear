import './Category.style.scss'
import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/category/category.selector'

const Category = () => {
    
    const { category } = useParams()
    const categories  = useSelector(selectCategoriesMap)
    const [ products, setProducts ] = useState(categories[category])
    
    useEffect(() => {
        setProducts(categories[category])
    },[categories, category])

  return (
    <div className='category-product-container'>
        <h2>{category}</h2>
        <div className="productcard-container">
            {products && 
            products.map(product => {
                return <ProductCard key={product.id} products={product}/>
            })}
        </div>
    </div>
  )
}

export default Category