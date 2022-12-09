import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import ProductCard from '../../components/product-card/ProductCard'
import './Shop.style.scss'

const Shop = () => {

    const { products } = useContext(ProductContext)
    console.log(products)
    return (
        <div className='products-container'>
            {products.map((products) => {
                return (
                    <ProductCard key={products.id} products={products}/>
                )
            })}
        </div>
    )
}

export default Shop