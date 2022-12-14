import React from 'react'
import { CategoriesContainer } from './Menu.style'
import CategoryItem from '../category-item/CategoryItem';

const Menu = ({ categories }) => {

    
  return (
    <CategoriesContainer>
      {
        categories.map((category) => {

          return (
          <CategoryItem key={category.id}
            category={category}
          ></CategoryItem>)
        }
        )
      }
    </CategoriesContainer>
  )
}

export default Menu