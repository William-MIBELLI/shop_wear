import { ACTION_TYPES } from "./category.types"


const CATEGORY_INITAL_STATE = {
    categories: []
}
export const categoryReducer = (state = CATEGORY_INITAL_STATE, action) => {
    const { type, payload } = action
    switch(type){
        case ACTION_TYPES.SET_CATEGORY:
            return{
               categories: payload
            }
        default:
            return state
    }
}