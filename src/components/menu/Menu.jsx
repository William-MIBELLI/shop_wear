import React from 'react'
import './Menu.style.scss'
import CategoryItem from '../category-item/CategoryItem';

const Menu = ({ categories }) => {
    
  return (
    <div className="categories-container">
      {
        categories.map((category) => {

          return (<CategoryItem key={category.id}
            category={category}
          ></CategoryItem>)
        }
        )
      }
    </div>
  )
}

export default Menu