export const selectCategoriesMap = (state) => {
    console.log('state : ', state.categories);
    const categories = state.categories.categories.reduce((acc, current) => {
        console.log('current : ', current)
    const { title, items } = current
    acc[title.toLowerCase()] = items
    return acc
  },{})
  return categories
}