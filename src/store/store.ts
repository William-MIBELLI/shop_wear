import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'

import { rootReducer } from './root-reducer'


export type rootState = ReturnType<typeof rootReducer>


const sagaMiddleware = createSagaMiddleware()
const middleWares = [logger, sagaMiddleware]
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const persiReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persiReducer, undefined, composeEnhancers)

export const persistore = persistStore(store)
sagaMiddleware.run(rootSaga)