import React from 'react'
import { useContext } from 'react'
import { CategoryContext } from '../../contexts/CategoryContext'
import CategoryPreview from '../../components/category-preview/CategoryPreview'

const CategoriesPreview = () => {

    const { categories } = useContext(CategoryContext)


    return  Object.keys(categories).map(title => {

            const products = categories[title]
            return (
                <CategoryPreview products={products} title={title}/>
            )
            
        })
}

export default CategoriesPreview