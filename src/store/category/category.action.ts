import { getCategoriesAndDocument } from "../../utils/Firebase";
import { createAction, Action, ActionWithPayload } from "../../utils/helper";
import { CATEGORY_ACTION_TYPES, Category } from "./category.types";

import { withMatcher } from "../../utils/helper";

export type FetchCategoryStart = Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START>

export type FetchCategorySuccess = ActionWithPayload<CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, Category[]>

export type FetchCategoryFailed = ActionWithPayload<CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILED, Error>

export type CategoryAction = FetchCategoryFailed | FetchCategoryStart | FetchCategorySuccess

export const fetchCategoriesSuccess = withMatcher((categoriesMap: Category[]) : FetchCategorySuccess => {
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categoriesMap)
})

export const fetchCategoriesStart = withMatcher(() : FetchCategoryStart => {
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START)
})

export const fetchCategoriesFailed = withMatcher((error: Error) : FetchCategoryFailed => {
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILED, error)
})


// export const fetchCategoriesAsync = () => async (dispatch) => {

//     dispatch(fetchCategoriesStart())


//     try{
//         const categoriesMap = await getCategoriesAndDocument()
//         dispatch(fetchCategoriesSuccess(categoriesMap))
//     } catch (error) {
//         dispatch(fetchCategoriesFailed(error))
//     }
// }