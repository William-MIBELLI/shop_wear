import { createSelector } from 'reselect'

export const selectCategoryReducer = state => {
  const categories = state.categories
  console.log('categories from selector : ', categories);
  return categories
}

// export const selectCategoriesMap = (state) => {

//     const categories = state.categories.categories.reduce((acc, current) => {
//       const { title, items } = current
//       acc[title.toLowerCase()] = items
//       return acc
//     },{})

//   return categories
// }

export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categories) => categories.categories.reduce((acc, current) => {
    const { title, items } = current
    acc[title.toLowerCase()] = items
    return acc
  },{})
)