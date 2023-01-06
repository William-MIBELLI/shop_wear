
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import {  useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/category/category.selector'

const CategoriesPreview = () => {

    const  categories  = useSelector(selectCategoriesMap)

    return   categories && Object.keys(categories).map(title => {

            const products = categories[title]
            return (
                <CategoryPreview  key={products.id} products={products} title={title}/>
            )
            
        })
}

export default CategoriesPreview