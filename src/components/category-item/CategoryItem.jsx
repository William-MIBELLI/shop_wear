import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BackgroundImage, CategoryContainer, CategoryBody} from'./CategoryItem.style'

const CategoryItem = ({ category }) => {

    const { title, imageUrl} = category
    const navigate = useNavigate()

    const clickHandler = () => {
      return navigate(`shop/${title}`)
    }

  return (
    <CategoryContainer onClick={clickHandler}>
        <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
        <CategoryBody>
            <h2>{title}</h2>
            <p>Shop now!</p>
        </CategoryBody>
    </CategoryContainer>
  )
}

export default CategoryItem