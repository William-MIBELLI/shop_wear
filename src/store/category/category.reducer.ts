import { Category } from "./category.types"
import {  fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from "./category.action"
import { AnyAction } from "redux";


export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null
}

const CATEGORY_INITAL_STATE : CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}
export const categoryReducer = (state = CATEGORY_INITAL_STATE, action = {} as AnyAction ): CategoriesState => {

    if(fetchCategoriesStart.match(action)){
        return {
            ...state, isLoading: true
        }
    }
    if(fetchCategoriesSuccess.match(action)){
        return{
            ...state, categories: action.payload, isLoading: false
        }
    }
    if(fetchCategoriesFailed.match(action)){
        return{
            ...state, error: action.payload, isLoading: false
        }
    }

    return state
}