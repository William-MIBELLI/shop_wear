import { ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesMap) => {
    return {type: ACTION_TYPES.SET_CATEGORY, payload: categoriesMap}
}