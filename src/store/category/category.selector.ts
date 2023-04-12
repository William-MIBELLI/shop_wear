import { createSelector } from 'reselect'

import { CategoriesState } from './category.reducer'
import { CategoryMap } from './category.types'
import { rootState } from '../store'

export const selectCategoryReducer = (state: rootState) : CategoriesState => {
  const categories = state.categories
  return categories
}

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categories) => {
    return categories.categories
  }
)


export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categories) : CategoryMap => categories.categories.reduce((acc, current) => {
    const { title, items } = current
    acc[title.toLowerCase()] = items
    return acc
  },{} as CategoryMap)
)