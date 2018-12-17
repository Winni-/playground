import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {reducers} from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const sagaMiddleware = createSagaMiddleware()

export const configureStore = (history, preloadedState) => {
  
  const rootReducer = combineReducers({ ...reducers })
  const middlewares = applyMiddleware(sagaMiddleware)
  const enhancers = composeEnhancers(middlewares)
  const store = createStore(rootReducer, preloadedState, enhancers)

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./rootReducer', () => {
      const reducers = require('./rootReducer')
      const rootReducer = combineReducers({ ...reducers})
      store.replaceReducer(rootReducer)
    })
  }

  return { store }
}
