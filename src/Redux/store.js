import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'

import combineReducers from './Reducer/index'

const config = {
  key: 'success',
  storage,
}

const persistedReducer = persistReducer(config, combineReducers)

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk)
)
export const persistor = persistStore(store)
