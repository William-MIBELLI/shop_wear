import { takeLatest, all, call, put } from 'typed-redux-saga'
import { CATEGORY_ACTION_TYPES } from './category.types'
import { getCategoriesAndDocument } from '../../utils/Firebase'
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action'


export function* fetchCategoriesAsync() {
    try{
        const categoriesMap = yield* call(getCategoriesAndDocument)
        yield* put(fetchCategoriesSuccess(categoriesMap))
    } catch (error){
        yield* put(fetchCategoriesFailed(error as Error))
    }
}

export function* onFetchCategories() {
    yield* takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield* all([call(onFetchCategories)])
}