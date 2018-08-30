import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import { Index } from './index/index'

import { rootReducer } from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const savedState = {}

export const store = createStore(
  rootReducer,
  savedState,
  composeEnhancers(applyMiddleware())
)

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
