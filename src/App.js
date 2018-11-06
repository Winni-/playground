import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import { configureStore, sagaMiddleware } from './configureStore'
import { Switcher } from './switcher'
import { rootSaga } from './rootSaga'

const history = createHistory()
const { store } = configureStore(history, window.REDUX_STATE)

sagaMiddleware.run(rootSaga)

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switcher />
      </Provider>
    )
  }
}
